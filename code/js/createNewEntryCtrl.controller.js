angular.module('archApp')
    .controller('CreateNewEntryCtrl', [
        '$scope',
        '$state',
        'Categories',
        'Validator',
        'BookEntryCache',
        function($scope, $state, Categories, Validator, BookEntryCache) {
            $scope.existingCategories = Categories.getExistingCategories();
            $scope.newEntryModel = BookEntryCache.getBookEmptyModel();
            $scope.afterSavingData = {};

            $scope.getEntryClassType = function() {
                return Categories.getCategoryIcon($scope.newEntryModel.category);
            };
            $scope.createNewEntry = function() {
                var validationResult = Validator.checkObjectProperties($scope.newEntryModel, true);

                if (validationResult && validationResult.ok) {
                    BookEntryCache.addNewEntry($scope.newEntryModel);
                    $scope.afterSavingData = {
                        name: 'Entry saved',
                        description: 'Nice to have one more book in our Library! You can see new Book in the list of all entries. There you can loan it to someone and keep track of all Entries in our Library, and also see which of then are currently on loan.',
                        backgroundClass: "category-background-success",
                        iconClass: "fa-check",
                        status: 'success'
                    };
                } else if (validationResult && validationResult.message) {
                    $scope.afterSavingData = {
                        name: 'Error occurred',
                        description: validationResult.message,
                        backgroundClass: "category-background-error",
                        iconClass: "fa-exclamation",
                        status: 'fail'
                    };
                }
            };
            $scope.afterSavingDataExists = function() {
               return Object.keys($scope.afterSavingData).length > 0;
            };

            $scope.$watchCollection('newEntryModel', function(newValue) {
               if (newValue && !_.isEmpty($scope.afterSavingData)) {
                   var validationResult = Validator.checkObjectProperties(newValue, true);

                   if (validationResult && validationResult.ok || $scope.afterSavingData.status === 'success') {
                       $scope.afterSavingData = {};
                   } else if (validationResult && validationResult.message) {
                       $scope.afterSavingData = {
                           name: 'Error occurred',
                           description: validationResult.message,
                           backgroundClass: "category-background-error",
                           iconClass: "fa-exclamation"
                       };
                   }
               }
            });
        }
    ]);