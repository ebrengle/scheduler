//Creating the module named scheduler
var scheduler = angular.module('scheduler', ['ngRoute', 'mgcrea.ngStrap']);

//configuring my routes for view of partials
scheduler.config(function($routeProvider){
  $routeProvider

    //this is my homepage partial
    .when('/', {
      templateUrl : 'partials/home.html',
      controller  : 'mainController'
    })

    //this is my appointment time view
    .when('/selectappt', {
      templateUrl : 'partials/selectappointment.html',
      controller  : 'mainController'
    })

    //this is my confirmation page
    .when('/confirmation', {
      templateUrl : 'partials/confirmation.html',
      controller  : 'mainController'
    });
});

//this is the controller for my homepage
scheduler.controller('mainController', function($scope) {
  // create a message to display in our view
 $scope.message = 'Please Work';

});
