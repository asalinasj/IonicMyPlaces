angular.module('starter.controllers')

.controller('MapCtrl', function($scope, $ionicHistory, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {
    $scope.verifyMap = function() {
        console.log('verified');
    }
    $scope.goHome = function(){
        $state.go('home');
    }
    $scope.goBack = function(){
        $ionicHistory.goBack();
    }

    var onSuccess = function(position) {
        console.log('Latitude: ' + position.coords.latitude + '\n' +
                    'Longitude: ' + position.coords.longitude + '\n' +
                    'Altitude: ' + position.coords.altitude + '\n');
    }

    function onError(error) {
        console.log('code: ' + error.code + '\n' +
                    'message: ' + error.message + '\n');
    }

    $scope.getGPSlocation = function() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    var options = {timeout: 1000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position) {
        var latLng = new google.maps.latLng(position.coords.latitude, position.coords.longitude);

        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.mapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }, function(error) {
        console.log("Could not get location");
    });

    $ionicPlatform.ready(function() {    
 
        $ionicLoading.show({
            template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
        });
         
        var posOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };
 
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var lat  = position.coords.latitude;
            var long = position.coords.longitude;
             
            var myLatlng = new google.maps.LatLng(lat, long);
             
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };          
             
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
             
            $scope.map = map;   
            $ionicLoading.hide();           
             
        }, function(err) {
            $ionicLoading.hide();
            console.log(err);
        });
    })              
});