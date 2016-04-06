// sample angular code

var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when('angular_movie_search/#/movies', {
      templateUrl: 'partials/searchAll.html',
    })
    .when('angular_movie_search/#/oneMovie', {
      templateUrl: '../partials/searchOne.html',
    });
});
