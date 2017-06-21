"use strict";

app.controller('NavCtrl', function ($scope, AuthFactory, $window, $location) {

  $scope.isLoggedIn = false;

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      $scope.isLoggedIn = true;
      console.log("currentUser logged in", user, $scope.isLoggedIn);
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      console.log("currentUser logged in", $scope.isLoggedIn);
      $window.location.href = "#!/login";
    }
  });

  $scope.logout = function(){
      AuthFactory.logoutUser()
      .then(function(data){
        $window.location.url = "#!/";
        //$scope.$apply();
        console.log("hello");
      }, function(error){
        console.log('There was an error logging user out');
      });

    };

    $scope.googleLogIn = function(){
      AuthFactory.getUser();
      AuthFactory.authWithProvider()
      .then(function(data){
        AuthFactory.getUser();
        // var user = data.user.uid;
        console.log("data from googleLogIn", data);
        $location.path('/home');
        $scope.$apply();
      })
      .catch(function(error){
        console.log(error);
      });
    };

});