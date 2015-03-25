//Creating the module named scheduler
var scheduler = angular.module('scheduler', ['ngRoute']);

//configuring my routes for view of partials
scheduler.config(function($routeProvider){
  $routeProvider

    //this is my homepage partial
    .when('/', {
      templateUrl : 'partials/home.html',
      controller  : 'mainControler'
    })

    //this is my appointment time view
    .when('/selectappt', {
      templateUrl : 'partials/selectappointment.html',
      controller  : 'apptControler'
    })

    //this is my confirmation page
    .when('/confirmation', {
      templateUrl : 'partials/confirmation.html',
      controller  : 'confirmControler'
    });
});

//this is the controller for my homepage
scheduler.controller('mainController', function($scope) {
  // create a message to display in our view
 $scope.message = 'Please Work';

});
