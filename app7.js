var app = angular.module('tutorial', ['ngMaterial']);


app.controller('StoreController', function() {
	this.products = [
	{
		name: "Milk",
		price: "2.1",
		icon: "/angular-tutorial/img/milk.svg",
		isAvailable: true
	}, {
		name: "Bread",
		price: "3.20",
		icon: "/angular-tutorial/img/bread.svg",
		isAvailable: true
	},
	{
		name: "Eggs",
		price: "5",
		icon: "/angular-tutorial/img/eggs.svg",
		isAvailable: true
	}
	];
	this.date = Date.now();
});
