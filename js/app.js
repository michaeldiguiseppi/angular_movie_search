// sample angular code

var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/movies', {
      templateUrl: 'partials/searchAll.html',
    })
    .when('/oneMovie', {
      templateUrl: '../partials/searchOne.html',
    });
});
