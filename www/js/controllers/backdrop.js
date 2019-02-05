var app = angular.module('starter', ['ionic']);
//not working, correct syntax but not able to run on its own file
app.controller('newCtrl', function($scope, $ionicBackdrop, $timeout) {
    $scope.showBackdrop = function() {
       $ionicBackdrop.retain();
         
       $timeout(function() {
          $ionicBackdrop.release();
       }, 3000);
    };
})

