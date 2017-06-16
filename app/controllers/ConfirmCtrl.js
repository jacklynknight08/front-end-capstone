"use strict";

app.controller('ConfirmCtrl', function($scope, DataFactory, $location, AuthFactory, $routeParams) {

	let user = AuthFactory.getUser();

	$scope.getBookedAppt = function(user){
		DataFactory.getBookedAppt(user)
		.then( (data) => {
			console.log("Appointment Data", data);
			$scope.appointment = data;
		});
	};

$scope.getBookedAppt(user);

});
