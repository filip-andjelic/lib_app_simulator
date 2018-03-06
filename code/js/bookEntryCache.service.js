angular.module('archApp')
    .service('BookEntryCache', ['Utility', '$rootScope', 'API_BASE', '$http',
        function(Utility, $rootScope, API_BASE, $http) {
        function getBookEmptyModel() {
            return {
                name: '',
                id: '0',
                category: 'novel',
                author: '',
                description: '',
                loaned: false,
                favorite: false
            };
        }
        function setDefaultBookEntries() {
            $http.get(API_BASE + 'books').then(function(response) {
                _.each(response.data, function(book, index) {
                    var newEntryObject = getBookEmptyModel();

                    newEntryObject.name = book.name;
                    newEntryObject.id = Utility.generateRandomString(9);
                    newEntryObject.category = book.category;
                    newEntryObject.author = book.author;
                    newEntryObject.description = book.description;
                    newEntryObject.loaned = index > 2;

                    existingItemsCache[newEntryObject.id] = newEntryObject;
                });
            }, function() {
                // throw some kind of error
            });
        }

        var existingItemsCache = {};
        var BookEntryCache = {};

        BookEntryCache.getBookEmptyModel = getBookEmptyModel;
        BookEntryCache.getExistingEntries = function() {
            return _.cloneDeep(existingItemsCache);
        };
        BookEntryCache.getFavoriteEntries = function() {
            var loanedItemsCache = {};

            _.each(existingItemsCache, function(item, key) {
                if (item.favorite) {
                    loanedItemsCache[key] = item;
                }
            });

            return loanedItemsCache;
        };
        BookEntryCache.getLoanedEntries = function() {
            var loanedItemsCache = {};

            _.each(existingItemsCache, function(item, key) {
                if (item.loaned) {
                    loanedItemsCache[key] = item;
                }
            });

            return loanedItemsCache;
        };
        BookEntryCache.addNewEntry = function(entry) {
            var newEntry = getBookEmptyModel();

            _.each(newEntry, function(value, property) {
                if (entry[property] !== undefined || entry[property] !== null) {
                    newEntry[property] = entry[property];
                }
            });
            newEntry.id = Utility.generateRandomString(9);

            existingItemsCache[newEntry.id] = newEntry;
        };
        BookEntryCache.getBookBack = function(entry) {
            if (existingItemsCache[entry.id]) {
                existingItemsCache[entry.id].loaned = false;

                $rootScope.$broadcast('Action.Entry.reload-items');
            }
        };
        BookEntryCache.loanBook = function(entry) {
            if (existingItemsCache[entry.id]) {
                existingItemsCache[entry.id].loaned = true;

                $rootScope.$broadcast('Action.Entry.reload-items');
            }
        };
        BookEntryCache.deleteBook = function(entry) {
            if (existingItemsCache[entry.id]) {
                delete existingItemsCache[entry.id];

                $rootScope.$broadcast('Action.Entry.reload-items');
            }
        };
        BookEntryCache.toggleFavoriteBook = function(entry, isFavorite) {
            if (existingItemsCache[entry.id]) {
                existingItemsCache[entry.id].favorite = isFavorite;

                $rootScope.$broadcast('Action.Entry.reload-items');
            }
        };

        setDefaultBookEntries();

        return BookEntryCache;
    }]);
