angular.module('starter.controllers')

.controller('MapCtrl', function($scope, $ionicHistory) {
    $scope.verifyMap = function() {
        console.log('verified');
    }
    $scope.goHome = function(){
        $state.go('home');
    }
    $scope.goBack = function(){
        $ionicHistory.goBack();
    }
});