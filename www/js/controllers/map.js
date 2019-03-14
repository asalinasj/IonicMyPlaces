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

    // var options = {timeout: 1000, enableHighAccuracy: true};

    // $cordovaGeolocation.getCurrentPosition(options).then(function(position) {
    //     var latLng = new google.maps.latLng(position.coords.latitude, position.coords.longitude);

    //     var mapOptions = {
    //         center: latLng,
    //         zoom: 15,
    //         mapTypeId: google.maps.mapTypeId.ROADMAP
    //     };

    //     $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // }, function(error) {
    //     console.log("Could not get location");
    // });

    $ionicPlatform.ready(function() {    
 
        // $ionicLoading.show({
        //     template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
        // });
         
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
            var index = 0;
            $scope.index = index; 
            $scope.map = map;   
            // $ionicLoading.hide();    
            
            // google.maps.event.addDomListener(document.getElementById('map'), 'mousedown', function(e) {
            //     e.preventDefault();
            //     return false;
            // });

            // google.maps.eventAddListener(map, 'click', function(event) {
            //     marker = new google.maps.Marker({
            //         position: event.myLatlng,
            //         map: map
            //     });
            // });

            // google.maps.event.addDomListener(window, 'load', initialize);
            google.maps.event.addListenerOnce($scope.map, 'idle', function() {
                var marker = new google.maps.Marker({
                    map: $scope.map,
                    animation: google.maps.Animation.DROP,
                    position: myLatlng,
                    draggable: true
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: "Here I am!"
                })

                google.maps.event.addListener(marker, 'click', function() {
                    infoWindow.open($scope.map, marker);
                })
                //initMap();

            });

            // var newMarkerContent = '<div id="content">' + 
            //                                 '<div id="newContent">' +
            //                                     '<h1 id="Marker Title">Marker</h1>' +
            //                                     '<p>Enter Information</p>' +
            //                                     '<form action="http://10.108.233.67:8080/newMarker" method="post"> ' + 
            //                                         'Label: <br>' +
            //                                         '<input type="text" ' + $scope.index + 'name="label"><br> ' + 
            //                                         'Description: <br>' +
            //                                         '<input type="text" name="description">' +
            //                                         '<input type="submit" value="Submit">' +
            //                                     '</form>'
            //                                 '</div>' + 
            //                             '</div>';
            var newMarkerContent = '<div><p>test</p></div';
            var newMarkerWindow = new google.maps.InfoWindow({
                content: newMarkerContent,
                id: $scope.index
            })

            map.addListener('click', function(e) {
                //placeMarker(e.latLng, $scope.map);
                var newMarker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    position: e.latLng,
                    map: $scope.map,
                    draggable: true
                })
                newMarker.infowindow = newMarkerWindow;
                newMarker.addListener('click', function() {
                    //newMarkerWindow.open($scope.map, newMarker);
                    newMarkerWindow.setContent('<div><p> ' + newMarkerWindow.id + '</p></div');
                    this.infowindow.open($scope.map, this);
                    // $scope.index = $scope.index + 1;
                    // console.log($scope.index);
                })
                $scope.index = $scope.index + 1;
                //newMarkerWindow.id++;
                console.log($scope.index);
                map.panTo(e.latLng);
            });

            // google.maps.event.addListener(newMarkerWindow, "closeclick", function(e) {
            //     $scope.index = $scope.index + 1;
            //     newMarkerWindow.setContent('<div><p> ' + newMarkerWindow.id + '</p></div');
            //     newMarkerWindow.id++;
            // })

            function initMap() {
                map.addListener('click', function(e) {
                    placeMarker(e.latLng, $scope.map);
                });
            }

            function placeMarker(myLatlng, map) {
                var marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    position: myLatlng,
                    map: map
                });
                marker.addListener('click', function() {
                    newMarkerWindow.open(map, marker);
                })
                map.panTo(myLatlng);
            }
             
        }, function(err) {
            $ionicLoading.hide();
            console.log(err);
        });
    }) 
    // $ionicPlatform.ready(function() {
    //     function initialize() {
    //         var mapOptions = {
    //           center: new google.maps.LatLng(43.07493,-89.381388),
    //           zoom: 16,
    //           mapTypeId: google.maps.MapTypeId.ROADMAP
    //         };
    //         var map = new google.maps.Map(document.getElementById("map"),
    //             mapOptions);
    
    //         // Stop the side bar from dragging when mousedown/tapdown on the map
    //         google.maps.event.addDomListener(document.getElementById('map'), 'mousedown', function(e) {
    //           e.preventDefault();
    //           return false;
    //         });
            
    //         google.maps.event.addListener(map, 'click', function(event) {
    //           marker = new google.maps.Marker({
    //             position: event.latLng,
    //             map: map
    //           });
    //         });
    
    //         $scope.map = map;
    //       }
    //       google.maps.event.addDomListener(window, 'load', initialize);
          
          
    //       $scope.centerOnMe = function() {
    //         if(!$scope.map) {
    //           return;
    //         }
    
    //         $scope.loading = $ionicLoading.show({
    //           content: 'Getting current location...',
    //           showBackdrop: false
    //         });
    
    //         navigator.geolocation.getCurrentPosition(function(pos) {
    //           $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    //           $scope.loading.hide();
    //         }, function(error) {
    //           alert('Unable to get location: ' + error.message);
    //         });
    //       };     
    // }) 
           
});