//Creating the module named scheduler
var scheduler = angular.module('scheduler', ['ngRoute', 'ui.router', 'mgcrea.ngStrap', ]);

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
         $scope.minTime = '12:00 AM';
         $scope.maxTime = '12:00 AM';
         break;
       case 1:
         $scope.minTime = '12:00 AM';
         $scope.maxTime = '12:00 AM';
         break;
       case 2:
         $scope.minTime = '12:00 PM';
         $scope.maxTime = '7:00 PM';
         break;
       case 3:
         $scope.minTime = '8:00 AM';
         $scope.maxTime = '1:00 PM';
         break;
       case 4:
         $scope.minTime = '12:00 PM';
         $scope.maxTime = '7:00 PM';
         break;
       case 5:
         $scope.minTime = '8:00 AM';
         $scope.maxTime = '1:00 PM';
         break;
       case 6:
         $scope.minTime = '9:00 AM';
         $scope.maxTime = '12:00 PM';
         break;
     }

     $scope.appointment.selectedDate.date.setHours($scope.minTime.split(':')[0]);
     $scope.appointment.selectedDate.date.setMinutes('00');
     $scope.appointment.selectedDate.date.setSeconds('00');

   }

   $scope.selectedTime = function () {
     console.log($scope.appointment.selectedDate.date);
   };

   $scope.appointment.firstAvail = {
       value : 'No'
     };

});
