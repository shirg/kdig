var myApp = angular.module('myApp', [
    'ngRoute',
    'postsControllers',
    'sideNavControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'EventsController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  when('/movies', {
      templateUrl: 'partials/movies.html',
      controller: 'MoviesController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);




