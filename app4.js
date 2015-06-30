(function() {
	var app = angular.module('tutorial', ['ngMaterial']);


	app.controller('StoreController', function() {
		this.product = {
			name: "Milk",
			price: "2"
		}
	});
})();