"use strict";

app.controller("ViewScheduleCtrl", function($scope, DataFactory, $location, $routeParams, AuthFactory) {

	let user = AuthFactory.getUser();

	$scope.getAppointments = function(){
		DataFactory.getAppointments()
		.then((appts) => {
			$scope.appts = appts;
			console.log("All Appointments", $scope.appts);
			//console.log("Stylist Data", $scope.appts[0].stylistID);
			//console.log("Time Data", $scope.appts[0].startTime);
			//$scope.stylist = $scope.appts[0].stylistID;
		});
	};

	$scope.getStylists = function(){
		DataFactory.getStylists()
		.then( (data) => {
			console.log("Stylist Data", data);
			$scope.stylists = data;
		});
	};

	$scope.getAppointments();
	$scope.getStylists();

});

