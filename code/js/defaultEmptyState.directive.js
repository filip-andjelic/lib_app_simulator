angular.module('archApp')
    .directive('defaultEmptyState', [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'html/default-empty-state.html',
                replace: true,
                scope: {
                    content: '=content'
                },
                link: function (scope) {}
            };
}]);