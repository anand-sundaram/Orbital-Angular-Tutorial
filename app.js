(function() {
	var app = angular.module('tutorial', []);

	// function StoreController() {
	// 	alert('Hello World!');
	// }

	app.controller('StoreController', function() {
		this.product = {
			name: "Milk",
			price: "2"
		}
	});
})();