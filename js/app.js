// sample angular code

var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/movies', {
      templateUrl: 'angular_movie_search/partials/searchAll.html',
    })
    .when('/oneMovie', {
      templateUrl: 'angular_movie_search/partials/searchOne.html',
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});
