app.controller('searchController', ['$scope', '$http', function($scope, $http) {
  $scope.searchTerm = '';
  $scope.searchMovie = function(body) {
    var term = body;
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s='+term,
    }).then(function(response) {
      console.log(response.data.Search);
      $scope.movies = response.data.Search;
    });
  };
  $scope.searchOne = function(body) {
    console.log(body);
    var id = body;
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?i='+id,
    }).then(function(response) {
      console.log(response);
      $scope.fields = response.data;
      $scope.img = response.data.Poster;
    });
  };
}]);
