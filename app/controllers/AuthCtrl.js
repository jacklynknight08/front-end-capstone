// "use strict";

// app.controller("AuthCtrl", ["$scope", "AuthFactory", "$window", "$location",
//   function($scope, AuthFactory, $window, $location){
//     console.log('AuthCtrl is activated');

//     $scope.logout = function(){
//       AuthFactory.logoutUser()
//       .then(function(data){
//         $window.location.url = "#!/";
//         //$scope.$apply();
//         console.log("hello");
//       }, function(error){
//         console.log('There was an error logging user out');
//       });

//     };

//     $scope.googleLogIn = function(){
//       AuthFactory.getUser();
//       AuthFactory.authWithProvider()
//       .then(function(data){
//         AuthFactory.getUser();
//         // var user = data.user.uid;
//         console.log("data from googleLogIn", data);
//         $location.path('/home');
//         $scope.$apply();
//       })
//       .catch(function(error){
//         console.log(error);
//       });
//     };


// }]);