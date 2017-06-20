"use strict";

console.log("DataFactory is loading..");

app.factory("DataFactory", function($q, $http, FBCreds, AuthFactory) {

	console.log("What's going on here?");

			const addAppointment = (newObj) => {
				return $q ((resolve, reject) => {
					let object = JSON.stringify(newObj);
					$http.post(`${FBCreds.databaseURL}/appointments.json`, object)
					.then ((response) => {
						console.log("Response", response.data.name);
						resolve(response.data.name);
					})
					.catch ((error) => {
						reject(error);
					});
				});
			};

			const getServices = () => {
				console.log("Services?");
				let services = [];
				return $q((resolve, reject) => {
					$http.get(`${FBCreds.databaseURL}/services.json`)
					.then((servObj) => {
						let servCollection = servObj.data;
						console.log("service collection", servCollection);
						Object.keys(servCollection).forEach((key) => {
							servCollection[key].serviceID = key;
							services.push(servCollection[key]);
						});
						resolve(services);
					})
					.catch((error) => {
						reject(error);
					});
				});
			};

				const getStylists = () => {
				console.log("Stylists?");
				let stylists = [];
				return $q((resolve, reject) => {
					$http.get(`${FBCreds.databaseURL}/stylists.json`)
					.then((styleObj) => {
						let styleCollection = styleObj.data;
						console.log("stylist collection", styleCollection);
						Object.keys(styleCollection).forEach((key) => {
							styleCollection[key].stylistID = key;
							stylists.push(styleCollection[key]);
						});
						resolve(stylists);
					})
					.catch((error) => {
						reject(error);
					});
				});
			};

			const getAppointments = () => {
				let appts = [];
				return $q((resolve, reject) => {
					$http.get(`${FBCreds.databaseURL}/appointments.json`)
					.then((apptObj) => {
						let apptCollection = apptObj.data;
						console.log("apptCollection", apptCollection);
						Object.keys(apptCollection).forEach((key) => {
							apptCollection[key].id = key;
							appts.push(apptCollection[key]);
						});
						resolve(appts);
					})
					.catch((error) => {
						reject(error);
					});
				});
			};

			const deleteAppointment = (apptkey) => {
				//console.log("APPT KEY", apptkey);
				return $q ((resolve, reject) => {
					$http.delete(`${FBCreds.databaseURL}/appointments/${apptkey}.json`)
					.then((response) => {
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
				});
			};

			const getBookedAppt = (apptkey) => {
				return $q((resolve, reject) => {
					$http.get(`${FBCreds.databaseURL}/appointments/${apptkey}.json`)
					.then((obj) => {
						let appt = obj.data;
						appt.id = apptkey;
						resolve(appt);
					})
					.catch((error) => {
						reject(error);
					});
				});
			};


	return { addAppointment,
			 getAppointments,
			 getServices,
			 getStylists,
			 deleteAppointment,
			 getBookedAppt };
});