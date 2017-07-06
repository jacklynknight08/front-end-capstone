"use strict";

app.controller("CreateApptCtrl", function($scope, DataFactory, $location, AuthFactory, $routeParams){

	let user = AuthFactory.getUser();

	$scope.newAppt = {
		serviceID: "",
		stylistID: "",
		startTime: "",
		uid: user
	};

	$scope.checkingAppts = [];

	// $scope.checkingTimes = [];
	// $scope.checkingStylists = [];

	$scope.addAppointment = function(){
		// console.log("newAppt", $scope.newAppt.serviceID);
		$scope.newAppt.serviceID = $scope.newAppt.serviceID.name;
		//console.log("New Appointment", $scope.newAppt.serviceID);
		$scope.newAppt.stylistID = $scope.newAppt.stylistID.name;
		//console.log("Stylist", $scope.newAppt.stylistID);
		DataFactory.addAppointment($scope.newAppt)
		.then( (data) => {
			DataFactory.getBookedAppt(data)
			.then( (data) => {
				console.log("BOOKED DATA", data);
				$scope.bookedAppt = data;
				console.log("Booked with this stylist", $scope.bookedAppt);
			$location.path(`/confirm/${$scope.bookedAppt.id}`);
			});
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
			$scope.getAppointments();
		});
	};

	$scope.getAppointments = function(){
		DataFactory.getAppointments()
		.then( (apptData) => {
			console.log("All Appointments", apptData);
			$scope.appts = apptData;
		});
	};

	$scope.checkAppt = function(){
		DataFactory.getAppointments()
		.then( (data) => {
			$scope.apptData = data;
			$scope.apptData.forEach(function(value, key){
				let newObj = {};
				newObj.startTime = value.startTime;
				newObj.stylistID = value.stylistID;
				$scope.checkingAppts.push(newObj);
				//console.log("NEWOBJ", newObj);
				//console.log("CHECK APPTS", $scope.checkingAppts);
				$scope.checkingAppts.forEach(function(value){
					if(value.stylistID == value.startTime){
						return false;
					}
				});
			});
		});
	};

	$scope.disabledBtn = function(){
		DataFactory.getAppointments()
		.then( (data) => {
			$scope.appointments = data;
			angular.forEach($scope.appointments, function(value){
				//console.log("VALUE", value);
				if(value.stylistID === true && value.startTime === true){
					value.disabled = true;
				}
			});
		});
	};

	$scope.getServices();
	$scope.getStylists();
	$scope.getAppointments();
	$scope.getTimes();
	$scope.disabledBtn();
 	$scope.checkAppt();
});