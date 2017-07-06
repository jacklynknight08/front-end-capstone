"use strict";

app.controller('EditApptCtrl', function($scope, DataFactory, $location, AuthFactory, $routeParams) {

	let user = AuthFactory.getUser();

	$scope.bookedAppt = {
		serviceID: "",
		stylistID: "",
		startTime: "",
		uid: user
	};

	$scope.getBookedAppt = () => {
		DataFactory.getBookedAppt($routeParams.appointmentKey)
		.then((response) => {
			$scope.bookedAppt = response;
			console.log("BookedAppt here", $scope.bookedAppt);
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

	$scope.getTimes = function(){
		DataFactory.getTimes()
		.then( (data) => {
			console.log("Time Data", data);
			$scope.times = data;
		});
	};

	$scope.getAppointments = function(){
		DataFactory.getAppointments()
		.then( (apptData) => {
			console.log("All Appointments", apptData);
			$scope.appts = apptData;
		});
	};

	$scope.disabled = function(){
		angular.forEach($scope.times, function(value){
			if(value.startTime === true){
				value.disabled = true;
			}
		});
	};

    $scope.submitNew = function() {
	    DataFactory.editAppt($routeParams.appointmentKey, $scope.bookedAppt)
	    .then( (response) => {
	    	$location.path("/viewschedule");
	    });
	    console.log("EDITED BOOKED APPT", $scope.bookedAppt);
	    console.log("You clicked the edit task button!");
	  };


$scope.getBookedAppt();
$scope.getServices();
$scope.getStylists();
$scope.getAppointments();
$scope.getTimes();





});
