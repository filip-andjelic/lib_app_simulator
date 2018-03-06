angular.module('archApp', ['ui.router'])
    .constant('API_BASE', 'http://localhost:7171/')
    .config(function($urlRouterProvider){
        $urlRouterProvider.when('', '/list-loaned-entries');
        $urlRouterProvider.otherwise('/list-loaned-entries');
    });