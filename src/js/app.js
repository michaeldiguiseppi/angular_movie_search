// sample angular code

var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/movies', {
      templateUrl: 'angular_search_app/partials/searchAll.html',
    })
    .when('/oneMovie', {
      templateUrl: 'angular_search_app/partials/searchOne.html',
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});
