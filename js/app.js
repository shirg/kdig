var myApp = angular.module('myApp', [
    'ngRoute',
    'postsControllers',
    'sideNavControllers'
    //'pageControllers' TODO: Add this when adding dynamic page title
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
      })
  .when('/restaurants', {
      templateUrl: 'partials/restaurants.html',
      controller: 'RestaurantsController'
  })
  .when('/culture', {
      templateUrl: 'partials/culture.html',
      controller: 'CultureController'
  }).
  otherwise({
    redirectTo: '/list'
  });


}]);

/* Page Title Control */
// TODO: Add dynamic page title. Right now Page is undefined....
/*
myApp.factory('Page', function() {

    var title = 'כנרת על המפה';
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle }
    };
});
*/




