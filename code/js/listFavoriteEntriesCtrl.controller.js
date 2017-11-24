angular.module('archApp')
    .controller('ListFavoriteEntriesCtrl', [
        '$scope',
        '$state',
        'Categories',
        'BookEntryCache',
        function($scope, $state, Categories, BookEntryCache) {
            function fetchItems() {
                $scope.existingBookEntries = BookEntryCache.getFavoriteEntries();
            }
            $scope.activeViewType = 'breadcrumb';
            $scope.getEntryClassType = Categories.getCategoryIcon;
            $scope.emptyStateModel = {
                title: 'No favorite Books',
                description: 'Does that mean you like all books the same? Or you don\'t like books at all! Maybe you just can\'t make choice, because you\'re unsure type of person. That\'s OK, don\'t feel too bad about id. If, on the other hand, you ever wish to make some book your favorite, please ',
                link: {
                    text: 'go to check all our Books!',
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