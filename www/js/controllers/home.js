angular.module('starter.controllers', [])

.controller('myCtrl', function($scope, $state, $ionicActionSheet, $ionicBackdrop, $timeout, 
   $ionicPopup, $ionicLoading, $ionicHistory, $cordovaCamera, $cordovaInAppBrowser, $ionicPlatform) {
   $scope.triggerActionSheet = function() {
      // Show the action sheet
      var showActionSheet = $ionicActionSheet.show({
         buttons: [
            { text: 'Edit 1' },
            { text: 'Edit 2' }
         ],
            
         destructiveText: 'Delete',
         titleText: 'Action Sheet',
         cancelText: 'Cancel',
            
         cancel: function() {
            // add cancel code...
         },
            
         buttonClicked: function(index) {
            if(index === 0) {
               // add edit 1 code
            }
               
            if(index === 1) {
               // add edit 2 code
            }
         },
            
         destructiveButtonClicked: function() {
            // add delete code..
            return true;
         }
      });
   };

   $scope.showBackdrop = function() {
      $ionicBackdrop.retain();
         
      $timeout(function() {
         $ionicBackdrop.release();
      }, 3000);
   };

   $scope.onTouchFunction = function() {
      console.log('test');
   };

   $scope.showPopup = function() {
      $scope.data = {}
   
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: 'Title',
         subTitle: 'Subtitle',
         scope: $scope,
      
         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Save</b>',
               type: 'button-positive',
               onTap: function(e) {
            
                  if (!$scope.data.model) {
                     //don't allow the user to close unless he enters model...
                     e.preventDefault();
                  } else {
                     return $scope.data.model;
                  }
               }
            }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };

   $scope.showLoading = function() {
      $ionicLoading.show({
         template: 'Loading...',
      });
   };

   $scope.hideLoading = function(){
      $ionicLoading.hide(3);
      
   };

   $scope.goHome = function(){
      $state.go('home');
   }
   $scope.goBack = function(){
      $ionicHistory.goBack();
   }
   $scope.goProfile = function(){
      $state.go('profile');
   }
   $scope.goMap = function() {
      $state.go('map');
   }

    //CAMERA use to get picture
   $scope.takePicture = function(options){
      var options = {
         quality: 75,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.CAMERA,
         allowEdit: true,
         encodingType: Camera.EncodingType.JPEG,
         targetWidth: 300,
         targetHeight: 300,
         popoverOptions: CameraPopoverOptions,
         saveToPhotoAlbum: false,
         sourceType: 1
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
         $scope.picture = "data:image/jpeg;base64," + imageData;
      }, function(err) {
         console.log(err);
      });
   }
   //CAMERA use to get picture from photo library
   $scope.takePictureLib = function(options){
      var options = {
         quality: 75,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
         allowEdit: true,
         encodingType: Camera.EncodingType.JPEG,
         targetWidth: 300,
         targetHeight: 300,
         popoverOptions: CameraPopoverOptions,
         saveToPhotoAlbum: false,
         sourceType: 0
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
         $scope.picture = "data:image/jpeg;base64," + imageData;
      }, function(err) {
         console.log(err);
      });
   }
   // $ionicPlatform.ready(function() {
   //    var options = {
   //       location: 'yes',
   //       clearcache: 'yes',
   //       toolbar: 'no'
   //    };
   //    console.log('test platform');
   //    $scope.openbrowser = function() {
   //       // windows.open('http://ngcordova.com', '_blank');
   //       console.log('test browser');
   //       // alert('hello');
   //       $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
         
   //       .then(function(event) {
   //          // success
   //       })
         
   //       .catch(function(event) {
   //          // error
   //       });
   //    }
   // })
   var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'yes',
      closebuttoncaption: 'DONE?'
   };

   $scope.openbrowser = function() {
      var iab = $cordovaInAppBrowser;
      iab.open('http://ngcordova.com', '_blank', options);
      console.log('test browser');
      // alert('hello');
      // $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
      
      // .then(function(event) {
      //    // success
      // })
      
      // .catch(function(event) {
      //    // error
      // });
   }
   $scope.checkButton = function() {
      console.log('test button');
   }
   
 })

