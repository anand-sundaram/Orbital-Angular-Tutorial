var app = angular.module('tutorial', ['ngMaterial']);

app.controller('StoreController', function() {
	this.products = [
	{
		name: "Milk",
		price: "2.1",
		icon: "/angular-tutorial/img/milk.svg",
		isAvailable: true,
		description: "Milk has a lot of calcium in it"
	}, {
		name: "Bread",
		price: "3.20",
		icon: "/angular-tutorial/img/bread.svg",
		isAvailable: true,
		description: "Bread is a easiest and cheapest way to appease your hunger"
	},
	{
		name: "Eggs",
		price: "5",
		icon: "/angular-tutorial/img/eggs.svg",
		isAvailable: true,
		description: "Eggs are an amazing source of protein"
	}
	];
	this.date = Date.now();

	this.selectProduct = function(prod) {
		this.selectedProduct = prod;
	}
});
