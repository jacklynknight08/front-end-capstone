"use strict";

app.controller("CreateApptCtrl", function($scope, DataFactory, $location, AuthFactory, $routeParams){

	let user = AuthFactory.getUser();

	$scope.newAppt = {
		serviceID: "",
		stylistID: "",
		startTime: "",
		uid: user
	};

	$scope.addAppointment = function(){
		// console.log("newAppt", $scope.newAppt.serviceID);
		$scope.newAppt.serviceID = $scope.newAppt.serviceID.name;
		//console.log("New Appointment", $scope.newAppt.serviceID);
		$scope.newAppt.stylistID = $scope.newAppt.stylistID.name;
		//console.log("Stylist", $scope.newAppt.stylistID);
		DataFactory.addAppointment($scope.newAppt)
		.then( (data) => {
			$location.path(`/confirm`);
		});
	};

	$scope.getServices = function(){
		DataFactory.getServices()
		.then( (data) => {
			console.log("Service Data", data);
			$scope.services = data;
		});
	};

	$scope.getStylists = function(){
		DataFactory.getStylists()
		.then( (data) => {
			console.log("Stylist Data", data);
			$scope.stylists = data;
		});
	};

	$scope.getServices();
	$scope.getStylists();
});