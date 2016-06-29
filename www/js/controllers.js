angular.module('starter.controllers', [])


.controller('ContactCtrl', function($scope,$location) {

// alert("sjdgasgdiiiifdyuatdsayudgsajhdsajh");
$location.url("/tab/camera");


})
.controller('abc', function($scope,BearerToken) {
  // alert("yudgwqjhdgashd");
})
.controller('DashCtrl', function($scope,BearerToken) {})
.controller('TabsCtrl', function($scope,BearerToken) {

console.log("dash");





})



.controller('CameraCtrl', function($scope,$cordovaCamera ) {
  $scope.camera = function(){
 
      document.addEventListener("deviceready", function () {
        var options = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          // allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          // targetWidth: 100,
          // targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: true,
        correctOrientation:true
        };



         $cordovaCamera.getPicture(options).then(function(imageData) {
      //var image = document.getElementById('myImage');
    $scope.dataImg = imageData; // <--- this is your Base64 string 
      $scope.imgUrl = "data:image/jpeg;base64," + imageData;
    }, function(err) {
          // error
        });
      }, false);


  }
})


.controller('flashCtrl', function($scope,$cordovaFlashlight) {
  $scope.flashLight = function(){
    
    document.addEventListener("deviceready", function () {
    $cordovaFlashlight.available().then(function(availability) {
    var avail = availability; // is available
  }, function () {
    // unavailable
  });

  // $cordovaFlashlight.switchOn()
  //   .then(
  //     function (success) { /* success */ },
  //     function (error) { /* error */ });

  // $cordovaFlashlight.switchOff()
  //   .then(
  //     function (success) { /* success */ },
  //     function (error) { /* error */ });

  $cordovaFlashlight.toggle()
    .then(function (success) { /* success */ },
      function (error) { /* error */ });
     }, false);
};

})

.controller('claimCtrl', function($scope,$cordovaCapture) {

  console.log("video");
  $scope.imagesss="";
  $scope.video = function() {
    var options = { limit: 3, duration: 15 };
document.addEventListener("deviceready", function () {
    $cordovaCapture.captureVideo(options).then(function(videoData) {
        tush=onSuccessVideo(videoData);
        $scope.imagesss=tush;
      // Success! Video data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });


      }, false);
}

 function onSuccessVideo(mediaFiles) {
      var i, path, len;
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
         path = mediaFiles[i].fullPath;   
      }
      return mediaFiles;
   }


$scope.uploadclaim = function(){

  document.addEventListener('deviceready', function () {
var server ="https://marijuana.herokuapp.com/api/users/upload";
var options="";
var filePath ="";
    $cordovaFileTransfer.upload(server, filePath, options)
      .then(function(result) {
        alert("uploaded");
        // Success!
      }, function(err) {
        alert("Network error");
        // Error
      }, function (progress) {
        alert("in process");
        // constant progress updates
      });

  }, false);
}
    



})


.controller('networkCtrl', function($cordovaCapture,$scope,$cordovaNetwork,$cordovaFlashlight,$location) {

$scope.camera = function(){
  // alert("xs");
$location.url("/contact");


}

 $scope.flashLight = function(){

    document.addEventListener("deviceready", function () {
    $cordovaFlashlight.available().then(function(availability) {
    var avail = availability; // is available
  }, function () {
    // unavailable
  });

  // $cordovaFlashlight.switchOn()
  //   .then(
  //     function (success) { /* success */ },
  //     function (error) { /* error */ });

  // $cordovaFlashlight.switchOff()
  //   .then(
  //     function (success) { /* success */ },
  //     function (error) { /* error */ });

  $cordovaFlashlight.toggle()
    .then(function (success) { /* success */ },
      function (error) { /* error */ });
     }, false);
};



  $scope.network = function(){

var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));      
$scope.randDigit=text;
      }




document.addEventListener("deviceready", function () {
    var type = $cordovaNetwork.getNetwork()
    var isOnline = $cordovaNetwork.isOnline()
    var isOffline = $cordovaNetwork.isOffline()
    if(isOnline == true){
      $scope.kkk="online";
    }else{
      $scope.kkk="offline";
    }

    // listen for Online event

  }, false);


return "online";
}

})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
