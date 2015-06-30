var app = angular.module('tutorial', ['ngMaterial']);

app.directive('headerBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'header-bar.html'
	};
});

app.directive('productList', function() {
	return {
		restrict: 'E',
		templateUrl: 'product-list.html',
		controller: ["$http", function($http) {
			this.review = {};
			var store = this;

			$http.get('/angular-tutorial/products.json').success(function(data) {
				store.products = data;
			});

			this.date = Date.now();

			this.selectProduct = function(prod) {
				this.selectedProduct = prod;
			};

			this.addReview = function(review) {
				this.selectedProduct.reviews.push(this.review);
				this.review = {};
			};

		}],
		controllerAs: 'store'
	};
});