angular.module('archApp')
    .service('BookEntryCache', ['Utility', '$rootScope',
        function(Utility, $rootScope) {
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
            var itemNames = [
                'Holy Bible',
                'L\'Albatros',
                'War and Peace',
                'Asap Science',
                'The Great Leveler: Violence and the History of Inequality from the Stone Age to the Twenty-First Century'];
            var itemCategories = [
                'religion',
                'poems',
                'novel',
                'science',
                'business'];
            var itemAuthors = [
                'King James (version)',
                'Charles Baudelaire',
                'Leo Tolstoy',
                'M. MOFFIT & G. BROWN',
                'Walter Scheidel'];
            var itemDescription = [
                'It has been termed the "noblest monument of English prose,” and it has come to be of central importance to Western society as no other book. Thunder Bay’s Holy Bible is beautifully appointed and illustrated with reproductions of original fifteenth-century masterpieces, highlighting Renaissance masterpieces from the period of 1430 to 1510.',
                'Often, to amuse themselves, the men of the crew \n Catch those great birds of the seas, the albatrosses, \n lazy companions of the voyage, who follow \n The ship that slips through bitter gulfs. \n Hardly have they put them on the deck, \n Than these kings of the skies, awkward and ashamed, \n Piteously let their great white wings \n Draggle like oars beside them.',
                'Born to an aristocratic Russian family in 1828, he is best known for the novels War and Peace (1869) and Anna Karenina (1877), often cited as pinnacles of realist fiction. He first achieved literary acclaim in his twenties with his semi-autobiographical trilogy, Childhood, Boyhood, and Youth (1852–1856), and Sevastopol Sketches (1855), based upon his experiences in the Crimean War. Tolstoy\'s fiction includes dozens of short stories and several novellas such as The Death of Ivan Ilyich, Family Happiness, and Hadji Murad. He also wrote plays and numerous philosophical essays.',
                'From the creators of the wildly popular and seriously scientific YouTube channel, AsapSCIENCE, comes entertaining, irreverent, and totally accessible answers to the questions you never got to ask in science class. This is the science that people actually want to learn, shared in an engaging style.',
                ' Inevitably, he argues, societies that manage to create an economic surplus become economically and politically unequal. Within those societies, over time, elites get better and better at rigging the system to divert resources toward themselves. Only catastrophe limits the march toward greater inequality — great plagues, state failure, revolution, and mass-mobilization warfare. In our pick for the best business book of 2017 on economics, Scheidel notes that the welfare state and international institutions such as the European Union and GATT made the world safe for global capitalism.'];

            _.each(itemNames, function(name, index) {
                var newEntryObject = getBookEmptyModel();

                newEntryObject.name = name;
                newEntryObject.id = Utility.generateRandomString(9);
                newEntryObject.category = itemCategories[index];
                newEntryObject.author = itemAuthors[index];
                newEntryObject.description = itemDescription[index];
                newEntryObject.loaned = index > 2;

                existingItemsCache[newEntryObject.id] = newEntryObject;
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
