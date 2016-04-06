// sample angular code

var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/movies', {
      templateUrl: 'partials/searchAll.html',
    })
    .when('/oneMovie', {
      templateUrl: 'partials/searchOne.html',
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});
