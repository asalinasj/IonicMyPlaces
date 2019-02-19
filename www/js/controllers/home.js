angular.module('starter.controllers', [])

.controller('myCtrl', function($scope, $state, $ionicActionSheet, $ionicBackdrop, $timeout, 
   $ionicPopup, $ionicLoading, $ionicHistory, Camera, $cordovaInAppBrowser) {
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

    //camera use
    $scope.takePicture = function(options){
      var options = {
         quality: 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 1
      };

      Camera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;;
      }, function(err) {
         console.log(err);
      });

      var options = {
         location: 'yes',
         clearcache: 'yes',
         toolbar: 'no'
      };
      
      $scope.openBrowser = function() {
         windows.open('http://ngcordova.com', '_blank');
         console.log('test browser');
         alert('hello');
         // $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
         
         // .then(function(event) {
         //    // success
         // })
         
         // .catch(function(event) {
         //    // error
         // });
      }
    }
 })

