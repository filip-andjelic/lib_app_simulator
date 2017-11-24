angular.module('archApp')
    .service('Categories', function() {
        function getCategoryEmptyModel() {
            return {
                name: '',
                value: '',
                containingItemsNum: 0
            };
        }
        function setDefaultCategories() {
            var categoryNames = ['Science', 'Religion', 'Novel', 'Poems', 'Business'];
            var categoryValues = ['science', 'religion', 'novel', 'poems', 'business'];

            _.each(categoryNames, function(name, index) {
               var newCategoryObject = getCategoryEmptyModel();

               newCategoryObject.name = name;
               newCategoryObject.value = categoryValues[index];

               existingItemsCache[newCategoryObject.value] = newCategoryObject;
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
    });
