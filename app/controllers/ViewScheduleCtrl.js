"use strict";

app.controller("ViewScheduleCtrl", function($scope, DataFactory, $location, $routeParams, AuthFactory) {

	let user = AuthFactory.getUser();

	$scope.getAppointments = function(){
		DataFactory.getAppointments()
		.then((appts) => {
			$scope.appts = appts;
			console.log("All Appointments", $scope.appts);
		});
	};

	$scope.getAppointments();

});