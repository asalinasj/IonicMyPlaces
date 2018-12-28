// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

// app.controller('newsController', function($scope, $http) {
//   $http({
//     method: "GET",
//     url: "http://codedamn.com/filesCodedamn/news.php"
//   }).then(function(data) {
//     console.log(data);
//   })
// })

app.controller('myCtrl', function($scope, $ionicActionSheet) {
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

app.controller('back', function($scope, $ionicBackdrop, $timeout) {
  $scope.showBackdrop = function() {
     $ionicBackdrop.retain();
       
     $timeout(function() {
        $ionicBackdrop.release();
     }, 3000);
  };
})

app.controller('touch', function($scope) {
  $scope.onTouchFunction = function() {
    console.log('test');
  };
})

app.controller('pop', function($scope, $ionicPopup) {
  // When button is clicked, the popup will be shown...
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
})

app.controller('loading', function($scope, $ionicLoading) {
  $scope.showLoading = function() {
     $ionicLoading.show({
        template: 'Loading...',
     });
  };

  $scope.hideLoading = function(){
     $ionicLoading.hide(3);
     
  };

  


});

app.config(function($stateProvider) {
  $stateProvider
  .state('index', { url: '/', templateUrl: 'index.html'})
  .state('about', {url: '/about', templateUrl: 'templates/about.html'});
});


