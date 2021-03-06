// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

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



app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', { 
    url: '/',
    title: 'Login',
    views: {
       'menuContent': {
         templateUrl: 'templates/login.html',
         controller: 'myCtrl'
       }
    } 
    
  })
  .state('home', {
    url: '/home',
    title: 'home',
    views: {
       'menuContent': {
         templateUrl: 'templates/home.html',
         controller: 'myCtrl'
       }
    } 
  })

  .state('profile', {
    url: '/profile',
    title: 'Profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'myCtrl'
      }
    }
  })

  .state('map', {
    url: '/map',
    title: 'Map',
    views: {
       'menuContent': {
         templateUrl: 'templates/map.html',
         controller: 'MapCtrl'
       }
    } 
  });

  $urlRouterProvider.otherwise('/');
});

