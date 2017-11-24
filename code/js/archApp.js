angular.module('archApp', ['ui.router'])
    .config(function($urlRouterProvider){
        $urlRouterProvider.when('', '/list-loaned-entries');
        $urlRouterProvider.otherwise('/list-loaned-entries');
    });