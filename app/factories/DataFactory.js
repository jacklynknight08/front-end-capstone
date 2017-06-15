"use strict";

console.log("DataFactory is loading..");

app.factory("DataFactory", function($q, $http, FBCreds) {

	console.log("What's going on here?");

			// const getServices = () => {
			// 	let services = [];
			// 	return $q( (resolve, reject) => {
			// 		$http.get(`${FBCreds.databaseURL}/services.json`)
			// 		.then( (serviceObj) => {
			// 			let serviceCollection = serviceObj.data;
			// 			console.log("service collection", serviceCollection);
			// 			Object.keys(serviceCollection).forEach( (key) => {
			// 				serviceCollection[key].serviceID = key;
			// 				services.push(serviceCollection[key]);
			// 			});
			// 			resolve(services);
			// 		})
			// 		.catch( (error) => {
			// 			reject(error);
			// 		});
			// 	});
			// };

			//const getStylists

			//const getAppointments

			// const createAppt

			//const deleteAppt

	return {
		//getServices,
		//getStylists,
		//getAppointments,
		//createAppt,
		//deleteAppt
	};
});
