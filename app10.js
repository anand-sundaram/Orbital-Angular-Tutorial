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
		controller: function() {
			this.review = {};
			this.products = [
			{
				name: "Milk",
				price: "2.1",
				icon: "/angular-tutorial/img/milk.svg",
				isAvailable: true,
				description: "Milk has a lot of calcium in it",
				reviews: [
				{
					content: 'Milk made me heal my fracture faster!',
					author: 'anand@orbital.com'
				}, 
				{
					content: 'I simply love milk :)',
					author: 'somebody@me.com'
				}]
			}, {
				name: "Bread",
				price: "3.20",
				icon: "/angular-tutorial/img/bread.svg",
				isAvailable: true,
				description: "Bread is the easiest and cheapest way to appease your hunger",
				reviews: [
				{
					content: 'I could keep eating it all day', 
					author: 'bhaiyaji@hotmale.com'
				},
				{
					content: 'I wish they also sold Nutella to go with bread :(',
					author: 'anand@soc.com'
				}]
			},
			{
				name: "Eggs",
				price: "5",
				icon: "/angular-tutorial/img/eggs.svg",
				isAvailable: true,
				description: "Eggs are an amazing source of protein",
				reviews: [
				{
					content: 'Scrambled eggs are the best breakfast',
					author: 'someone@something.com'
				},
				{
				 	content: 'Is it just me or did the eggs smell weird after boiling?',
				 	author: 'shopper@shopperworld.com'
				}]
			}
			];
			this.date = Date.now();

			this.selectProduct = function(prod) {
				this.selectedProduct = prod;
			};

			this.addReview = function(review) {
				this.selectedProduct.reviews.push(this.review);
				this.review = {};
			};

		},
		controllerAs: 'store'
	};
});