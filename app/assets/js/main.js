//Creating the module named scheduler
var scheduler = angular.module('scheduler', ['ngRoute', 'ui.router', 'mgcrea.ngStrap', ]);

//configuring my routes for view of partials
// scheduler.config(function($routeProvider){
//   $routeProvider
//
//     //this is my homepage partial
//     .when('/', {
//       templateUrl : 'partials/basic.html',
//       controller  : 'mainController',
//       controllerAs: 'appointment'
//     })
//
//     //this is my appointment time view
//     .when('/selectappt', {
//       templateUrl : 'partials/selectappointment.html',
//       controller  : 'mainController',
//       ControllerAs: 'appointment'
//     })
//
//     //this is my confirmation page
//     .when('/confirmation', {
//       templateUrl : 'partials/confirmation.html',
//       controller  : 'mainController',
//       ControllerAs: 'appointment'
//     });
// });

scheduler.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/form/basic");

  $stateProvider
    .state('form', {
      url: "/form",
      templateUrl: "partials/form.html",
      controller: 'mainController'

    })
    .state('form.basic', {
      url: "/basic",
      templateUrl: "partials/form.basic.html"

    })
     .state('form.selectappointment', {
      url: "/selectappt",
      templateUrl: "partials/form.selectappointment.html"

    })
    .state('form.confirm', {
     url: "/confirm",
     templateUrl: "partials/form.confirmation.html"

   })
});

//this is the controller for my app
scheduler.controller('mainController', function($scope) {

  $scope.appointment = {};




 $scope.setAvailableTimes = function () {
   var dayOfWeek = $scope.appointment.selectedDate.date.getDay();

   switch (dayOfWeek) {
     case 0:
       $scope.minTime = '00:00';
       $scope.maxTime = '00:00';
       break;
     case 1:
       $scope.minTime = '00:00';
       $scope.maxTime = '00:00';
       break;
     case 2:
       $scope.minTime = '12:00';
       $scope.maxTime = '19:00';
       break;
     case 3:
       $scope.minTime = '08:00';
       $scope.maxTime = '13:00';
       break;
     case 4:
       $scope.minTime = '12:00';
       $scope.maxTime = '19:00';
       break;
     case 5:
       $scope.minTime = '08:00';
       $scope.maxTime = '13:00';
       break;
     case 6:
       $scope.minTime = '09:00';
       $scope.maxTime = '12:00';
       break;
   }

   $scope.appointment.selectedDate.date.setHours($scope.minTime.split(':')[0]);
   $scope.appointment.selectedDate.date.setMinutes('00');
   $scope.appointment.selectedDate.date.setSeconds('00');

 }

 $scope.selectedTime = function () {
   console.log($scope.appointment.selectedDate.date);
 }

});
