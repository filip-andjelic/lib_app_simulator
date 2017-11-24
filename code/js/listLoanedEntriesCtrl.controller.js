angular.module('archApp')
    .controller('ListLoanedEntriesCtrl', [
        '$scope',
        '$state',
        'Categories',
        'BookEntryCache',
        function($scope, $state, Categories, BookEntryCache) {
            function fetchItems() {
                $scope.existingBookEntries = BookEntryCache.getLoanedEntries();
            }
            $scope.activeViewType = 'breadcrumb';
            $scope.getEntryClassType = Categories.getCategoryIcon;
            $scope.emptyStateModel = {
                title: 'Nobody loaned a Book!',
                description: 'I guess people nowadays don\'t read anymore. We can maybe try advertising our Library, make social network marketing campaign, bring some writers and poets and make culture events. Or, should we bring down technology and force people to get book in their hands once again?',
                link: {
                    text: 'Come and see Books we have to offer!',
                    sref: 'list_all'
                }
            };

            $scope.hasEntriesToShow = function() {
                return $scope.existingBookEntries ? Object.keys($scope.existingBookEntries).length : false;
            };
            $scope.toggleView = function(type) {
                $scope.activeViewType = type;
            };

            fetchItems();

            $scope.$on('Action.Entry.reload-items', function() {
                fetchItems();
            });
        }
    ]);