angular.module('archApp')
    .service('Categories', ['API_BASE', '$http', function(API_BASE, $http) {
        function getCategoryEmptyModel() {
            return {
                name: '',
                value: '',
                containingItemsNum: 0
            };
        }
        function setDefaultCategories() {
            $http.get(API_BASE + 'categories').then(function(response) {
                _.each(response.data, function(category) {
                    var newCategoryObject = getCategoryEmptyModel();

                    newCategoryObject.name = category.name;
                    newCategoryObject.value = category.value;

                    existingItemsCache[newCategoryObject.value] = newCategoryObject;
                });
            }, function() {
                // throw some kind of error
            });
        }

        var existingItemsCache = {};
        var Categories = {};

        Categories.getExistingCategories = function() {
            return _.cloneDeep(existingItemsCache);
        };
        Categories.getCategoryIcon = function(category) {
            var classType = '';

            switch (category) {
                case 'religion':
                    classType = 'rebel';
                    break;
                case 'business':
                    classType = 'graduation-cap';
                    break;
                case 'science':
                    classType = 'flask';
                    break;
                case 'poems':
                    classType = 'pagelines';
                    break;
                case 'novel':
                    classType = 'envira';
                    break;
            }

            return classType;
        };

        setDefaultCategories();

        return Categories;
    }]);
