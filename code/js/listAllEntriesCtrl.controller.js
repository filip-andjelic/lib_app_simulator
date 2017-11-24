angular.module('archApp')
    .controller('ListAllEntriesCtrl', [
        '$scope',
        '$state',
        'Categories',
        'BookEntryCache',
        function($scope, $state, Categories, BookEntryCache) {
            function fetchItems() {
                $scope.existingBookEntries = BookEntryCache.getExistingEntries();
            }
            $scope.activeViewType = 'breadcrumb';
            $scope.getEntryClassType = Categories.getCategoryIcon;
            $scope.emptyStateModel = {
                title: 'No Books in library!',
                description: 'What kind of library is this?! Now we can lock down our pretty little Library, and start to work as miners... Or maybe taxy drivers... Or we can buy some Books and start over? I think that\'s what we should do!',
                link: {
                    text: 'Click to add a Book to Library!',
                    sref: 'create_new'
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