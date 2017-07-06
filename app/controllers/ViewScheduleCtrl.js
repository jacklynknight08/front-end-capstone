"use strict";

app.controller("ViewScheduleCtrl", function($scope, DataFactory, $location, $routeParams, AuthFactory) {

	let user = AuthFactory.getUser();

	$scope.getAppointments = function(){
		DataFactory.getAppointments()
		.then( (appts) => {
			$scope.appts = appts;
			console.log("All Appointments", $scope.appts);
			$scope.getStylists();  //makes stylist data available in all appointments
			console.log("Stylist Data in Appointments", $scope.stylists);
		});
	};

	$scope.getStylists = function(){
		DataFactory.getStylists()
		.then( (data) => {
			//console.log("Stylist Data", data);
			$scope.stylists = data;
		});
	};

	$scope.deleteAppointment = function(id){
		DataFactory.deleteAppointment(id)
		.then( (response) => {
			$scope.getAppointments();
		});
	};

	$scope.getAppointments();
	$scope.getStylists();
	// $scope.getAll();

});

