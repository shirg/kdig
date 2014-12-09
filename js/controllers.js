
var postsControllers = angular.module('postsControllers', []);

// TODO: Make this cache instead of global variables
var global_events, global_movies, global_restaurants, global_culture;

/* Events - Fetch and display events */
postsControllers.controller('EventsController', ['$scope', '$http', function($scope, $http) {


    $scope.eventsOrder = 'post_title';

    $http.get('http://kinneret.mobi/?getjson=1&cat=425&order_by=meta_value&meta_key=start_date').success(function(data) {
            console.log('SUCCESS getting -events- by JSON');
            console.log(data);

            $scope.events = data;
            global_events = data;
            $scope.eventsOrder = 'custom_fields.start_date';

    }).
        error(function(data, status ){
            console.log('FAILED getting -events- by JSON');
    });



}]);


/* Display Details for each event item */
postsControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {

    if (typeof global_events == 'undefined'){

        // TODO: Dry this part. It repeats itself.

        $http.get('http://kinneret.mobi/?getjson=1&cat=425&order_by=meta_value&meta_key=start_date').success(function(data) {
            global_events = data;
            $scope.events = data;

            $scope.whichItem = $routeParams.itemId;
            if ($routeParams.itemId > 0) {
                $scope.prevItem = Number($routeParams.itemId)-1;
            } else {
                $scope.prevItem = $scope.events.length-1;
            }

            if ($routeParams.itemId < $scope.events.length-1) {
                $scope.nextItem = Number($routeParams.itemId)+1;
            } else {
                $scope.nextItem = 0;
            }
        });
    } else {
        $scope.events = global_events;

        $scope.whichItem = $routeParams.itemId;
        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId)-1;
        } else {
            $scope.prevItem = $scope.events.length-1;
        }

        if ($routeParams.itemId < $scope.events.length-1) {
            $scope.nextItem = Number($routeParams.itemId)+1;
        } else {
            $scope.nextItem = 0;
        }
    }
}]);

/* Movies - Fetch and display movies */
postsControllers.controller('MoviesController', ['$scope', '$http', function($scope, $http) {
    $scope.moviesOrder = 'post_title';

    $http.get('http://kinneret.mobi/?getjson=1&cat=593&order_by=meta_value&meta_key=start_date').success(function(data) {
        console.log('SUCCESS getting -movies- by JSON');
        console.log(data);

        $scope.movies = data;
        global_movies = data;
        $scope.eventsOrder = 'custom_fields.start_date';

    }).
        error(function(data, status ){
            console.log('FAILED getting -movies- by JSON');
        });
}]);


/* Restaurants - Fetch and display restaurants */
postsControllers.controller('RestaurantsController', ['$scope', '$http', function($scope, $http) {
    $scope.restaurantsOrder = 'post_title';

    $http.get('http://kinneret.mobi/?getjson=1&cat=5&order_by=post_title').success(function(data) {
        console.log('SUCCESS getting -restaurants- by JSON');
        console.log(data);

        $scope.restaurants = data;
        global_restaurants = data;
        $scope.eventsOrder = 'custom_fields.post_title';

    }).
        error(function(data, status ){
            console.log('FAILED getting -restaurants- by JSON');
        });
}]);

/* Culture - Fetch and display restaurants */
postsControllers.controller('CultureController', ['$scope', '$http', function($scope, $http) {


    $http.get('http://kinneret.mobi/?getjson=1&cat=609&order_by=meta_value&meta_key=start_date').success(function(data) {
        console.log('SUCCESS getting -culture- by JSON');
        console.log(data);

        $scope.culture = data;
        global_culture = data;
        $scope.cultureOrder = 'custom_fields.start_date';

    }).
        error(function(data, status ){
            console.log('FAILED getting -culture- by JSON');
        });
}]);


/***** Side Panels ********/
var sideNavControllers = angular.module('sideNavControllers', ['ngMaterial']);


sideNavControllers.controller('PanelCtrl', ['$scope', '$timeout', '$mdSidenav', function($scope, $timeout, $mdSidenav) {
  $scope.toggleRight = function() {    $mdSidenav('right').toggle();  };
  $scope.close = function() {    $mdSidenav('right').close();  };
}]);


// TODO: Complete this dynamic page title. Not working. See also app.js
/*
var pageControllers = angular.module('pageControllers',[]);
pageControllers.controller('PageTitleController', ['$scope', function($scope){
        $scope.Page = Page;
}]);
*/


/* ------- */

