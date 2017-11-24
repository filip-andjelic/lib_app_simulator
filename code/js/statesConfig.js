angular.module('archApp')
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('list_loaned', {
                url: '/list-loaned-entries',
                controller: 'ListLoanedEntriesCtrl',
                templateUrl: 'html/list-loaned-entries-page.html'
            })
            .state('create_new', {
                url: '/create-new-entry',
                controller: 'CreateNewEntryCtrl',
                templateUrl: 'html/create-new-entry-page.html'
            })
            .state('list_all', {
                url: '/list-all-entries',
                controller: 'ListAllEntriesCtrl',
                templateUrl: 'html/list-all-entries-page.html'
            })
            .state('list_favorite', {
                url: '/list-favorite-entries',
                controller: 'ListFavoriteEntriesCtrl',
                templateUrl: 'html/list-favorite-entries-page.html'
            })
            .state('settings', {
                url: '/settings',
                controller: 'ListAllEntriesCtrl',
                templateUrl: 'html/list-all-entries-page.html'
            });
    }]);