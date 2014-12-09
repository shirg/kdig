
var postsControllers = angular.module('postsControllers', ['ngAnimate']);

// TODO: Make this cache instead of global variables
var global_events, global_movies;

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


/**** Display Details for each event item ****/
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


postsControllers.controller('MoviesController', ['$scope', '$http', function($scope, $http) {


    $scope.eventsOrder = 'post_title';

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




/***** Side Panels ********/
var sideNavControllers = angular.module('sideNavControllers', ['ngMaterial']);


sideNavControllers.controller('PanelCtrl', ['$scope', '$timeout', '$mdSidenav', function($scope, $timeout, $mdSidenav) {
  $scope.toggleRight = function() {    $mdSidenav('right').toggle();  };
  $scope.close = function() {    $mdSidenav('right').close();  };
}]);

/*
sideNavControllers.controller('RightPanelCtrl', ['$scope', '$timeout', '$mdSidenav', function($scope, $timeout, $mdSidenav) {
    $scope.close = function() {    $mdSidenav('right').close();  };
}]);
*/






/* ------- */

