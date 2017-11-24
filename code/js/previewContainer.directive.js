angular.module('archApp')
    .directive('previewContainer', [function() {
        return {
            restrict: 'E',
            templateUrl: 'html/preview-container.html',
            replace: true,
            scope: {
                contentModel: '=contentModel',
                containerClass: '@containerClass',
                iconClass: '@iconClass'
            },
            link: function(scope) {}
        }
    }]);