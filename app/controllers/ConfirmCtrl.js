"use strict";

app.controller('ConfirmCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory) {

$scope.getBookedAppt = () => {
	DataFactory.getBookedAppt($routeParams.appointmentKey)
	.then((response) => {
		$scope.bookedAppt = response;
		console.log("BookedAppt here", $scope.bookedAppt);
	});
};


$scope.getBookedAppt();

});