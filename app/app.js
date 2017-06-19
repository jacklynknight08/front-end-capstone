"use strict";

const app = angular.module('ScheduleApp', ['ngRoute']);


//set isAuth up so user has to be logged in to view other pages
let isAuth = (AuthFactory) => new Promise((resolve, reject) => {  //look inside AuthFactory
	AuthFactory.isAuthenticated()
	.then( (userExists) => {  //should be a true/false that comes back to us
		if(userExists){
			console.log("Authenticated, go ahead");
			resolve();
		}else {
			console.log("Authentication reject, GO AWAY");
			reject();
		}
	});
});

app.config( ($routeProvider) => {
	$routeProvider  //setting up our object
	.when('/', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl',
	})
	.when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl',
	})
	.when('/logout', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl',
	})
	.when('/home', {
		templateUrl: 'partials/home.html',
		resolve: {isAuth}
	})
	.when('/staff', {
		templateUrl: 'partials/staff.html',
		resolve: {isAuth}
	})
	.when('/products', {
		templateUrl: 'partials/products.html',
		resolve: {isAuth}
	})
	.when('/contact', {
		templateUrl: 'partials/contact.html',
		resolve: {isAuth}
	})
	.when('/schedule', {
		templateUrl: 'partials/schedule.html',
		//controller: 'ScheduleCtrl',
		resolve: {isAuth}
	})
	.when('/create', {
		templateUrl: 'partials/create-appt.html',
		controller: 'CreateApptCtrl',
		resolve: {isAuth}
	})
	.when('/confirm/:appointmentKey', {
		templateUrl: 'partials/confirm.html',
		controller: 'ConfirmCtrl',
		resolve: {isAuth}
	})
	.when('/viewschedule', {
		templateUrl: 'partials/view-schedule.html',
		controller: 'ViewScheduleCtrl',
		resolve: {isAuth}
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});

