"use strict";

app.controller('ProductCtrl', function($scope, DataFactory, $location, AuthFactory, $routeParams){

let user = AuthFactory.getUser();

	$scope.getProducts = function(){
		DataFactory.getProducts()
		.then( (data) => {
			console.log("Products Data", data);
			$scope.products = data;
		});
	};

	$scope.getProducts();

});