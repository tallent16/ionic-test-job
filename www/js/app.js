// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

    .state('contact', {
      url: '/contact',
          cache: false,
      templateUrl: 'templates/contact.html',
       controller: 'ContactCtrl'

    })

  .state('tab.camera_url', {
    url: '/camera_url',

    views: {
      'tab-camera_url': {
        templateUrl: 'templates/tab-camera_url.html',
        controller: 'CameraUrlCtrl'
      }
    }
  })

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'networkCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
  .state('tab.camera', {
    url: '/camera',
    cache: false,
    views: {
      'tab-camera': {
        templateUrl: 'templates/tab-camera.html',
        controller: 'CameraCtrl'
      }
    }
  })



  .state('tab.flashlight', {
    url: '/flashlight',
    views: {
      'tab-flashlight': {
        templateUrl: 'templates/tab-flashlight.html',
        controller: 'flashCtrl'
      }
    }
  })

    .state('tab.network', {
    url: '/network',
    views: {
      'tab-network': {
        templateUrl: 'templates/tab-network.html',
        controller: 'networkCtrl'
      }
    }
  })

    .state('tab.video', {
    url: '/video',
    cache: false,
    views: {
      'tab-video': {
        templateUrl: 'templates/tab-video.html',
        controller: 'claimCtrl'
      }
    }
  })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
    $urlRouterProvider.otherwise('/tab/video');

})

  .factory('SignalStrength', function ($rootScope, $cordovaNetwork) {
console.log("network");
return "online";
document.addEventListener("deviceready", function () {
 
    var type = $cordovaNetwork.getNetwork()

    var isOnline = $cordovaNetwork.isOnline()

    var isOffline = $cordovaNetwork.isOffline()

var state_net ="";
    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
      state_net= "online";
      return state_net;
    })

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
      state_net= "offline";
      return state_net;
    })



  }, false);

return "online";
   })

  .factory('BearerToken', function () {
   var token ="tuhhhhhhhhhhhhh";
    return token;  
  })
  // if none of the above states are matched, use this as the fallback

