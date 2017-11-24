angular.module('archApp')
    .controller('ArchController', ['$scope', '$state', 'BookEntryCache',
        function($scope, $state, BookEntryCache) {
            function openNewView(item) {
                $state.go(item.view);
            }
            function setItemsToClose() {
                _.each($scope.sidebarItems, function(item) {
                    item.open = false;
                });
            }

            $scope.goToSettingsView = function() {

            };
            $scope.goToCreateNewView = function() {
                setItemsToClose();
                $state.go('create_new');
            };
            $scope.sidebarItems = [{
                iconClass: 'fa-leanpub',
                view: 'list_all',
                open: false
            }, {
                iconClass: 'fa-list-ol',
                view: 'list_loaned',
                open: true
            }, {
                iconClass: 'fa-star',
                view: 'list_favorite',
                open: false
            }];

            $scope.changePageView = function(item) {
                setItemsToClose();
                item.open = true;
                openNewView(item);
            };

            $scope.$on('Action.Entry.get-it-back', function(event, params) {
                var editedEntry = params.entry;

                if (editedEntry) {
                    BookEntryCache.getBookBack(editedEntry);
                }
            });
            $scope.$on('Action.Entry.loan-book', function(event, params) {
                var editedEntry = params.entry;

                if (editedEntry) {
                    BookEntryCache.loanBook(editedEntry);
                }
            });
            $scope.$on('Action.Entry.delete-book', function(event, params) {
                var editedEntry = params.entry;

                if (editedEntry) {
                    BookEntryCache.deleteBook(editedEntry);
                }
            });
            $scope.$on('Action.Entry.un-favorite', function(event, params) {
                var editedEntry = params.entry;

                if (editedEntry) {
                    BookEntryCache.toggleFavoriteBook(editedEntry, false);
                }
            });
            $scope.$on('Action.Entry.favorite', function(event, params) {
                var editedEntry = params.entry;

                if (editedEntry) {
                    BookEntryCache.toggleFavoriteBook(editedEntry, true);
                }
            });
        }]);