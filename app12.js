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
		templateUrl: 'product-list2.html',
		controller: ["$http", function($http) {
			this.review = {};
			var store = this;
			this.cart = [];
			this.total = 0;

			$http.get('/angular-tutorial/products.json').success(function(data) {
				store.products = data;
			});

			this.date = Date.now();

			this.selectProduct = function(product) {
				this.selectedProduct = product;
			};

			this.addReview = function(review) {
				this.selectedProduct.reviews.push(this.review);
				this.review = {};
			};

			this.addToCart = function(product) {
				this.cart.push(product);
				this.total = this.total + parseFloat(product.price);
			};

		}],
		controllerAs: 'store'
	};
});