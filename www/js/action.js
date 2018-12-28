angular.module('starter', ['ionic'])
//can't be run on its own
.controller('myCtrl', function($scope, $ionicActionSheet) {
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
 })

