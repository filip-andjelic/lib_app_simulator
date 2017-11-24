angular.module('archApp')
    .directive('previewActionsContainer', ['$rootScope', 'Categories',
        function($rootScope, Categories) {
        return {
            restrict: 'E',
            templateUrl: 'html/preview-actions-container.html',
            replace: true,
            scope: {
                contentModel: '=contentModel',
                containerClass: '@containerClass',
                iconClass: '@iconClass'
            },
            link: function(scope) {
                scope.isLoaned = false;
                scope.isFavorite = false;

                scope.getEntryClassType = Categories.getCategoryIcon;
                scope.triggerEntityAction = function(actionName) {
                    scope.triggerActionsToggle(false);

                    $rootScope.$broadcast('Action.Entry.' + actionName, {
                        entry: scope.contentModel
                    });
                };
                scope.triggerActionsToggle = function(show) {
                    scope.showActions = show;
                };

                scope.$watchCollection('contentModel', function(newModel) {
                   if (newModel) {
                       scope.isLoaned = newModel.loaned;
                       scope.isFavorite = newModel.favorite;
                   }
                });
            }
        }
    }]);