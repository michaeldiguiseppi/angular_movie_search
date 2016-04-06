app.controller('searchController', ['$scope', '$http', function($scope, $http) {
  $scope.searchTerm = '';
  $scope.tomatoes = false;
  $scope.searchMovie = function(body) {
    var term = body;
    var url = 'http://www.omdbapi.com/?s='+term;
    if ($scope.type) {
      url += '&type='+$scope.type;
    }
    $http({
      method: 'GET',
      url: url,
    }).then(function(response) {
      $scope.movies = response.data.Search;
    });
  };
  $scope.searchOne = function(body) {
    var id = body;
    var extras = '&tomatoes=true';
    var url = 'http://www.omdbapi.com/?i=';
    if ($scope.tomatoes) {
      url += (id + extras);
    } else {
      url += id;
    }
    $http({
      method: 'GET',
      url: url,
    }).then(function(response) {
      $scope.fields = [];
      $scope.title = response.data.Title;
      $scope.synopsis = response.data.Plot;
      $scope.starring = response.data.Actors;
      var fields = Object.keys(response.data);
      fields.forEach(function(field) {
        if (field !== 'Plot' && field !== 'Title' && field !== 'Poster' && field !== 'Actors') {
          $scope.fields.push({
            field: field,
            value: response.data[field],
          });
        }
      });
      $scope.img = response.data.Poster;
    });
  };
}]);
