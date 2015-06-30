var app = angular.module('tutorial', ['ngMaterial']);

app.controller('StoreController', function() {
	this.products = [
	{
		name: "Milk",
		price: "2",
		icon: "/angular-tutorial/img/milk.svg"
	}, {
		name: "Bread",
		price: "3",
		icon: "/angular-tutorial/img/bread.svg"
	},
	{
		name: "Eggs",
		price: "5",
		icon: "/angular-tutorial/img/eggs.svg"	
	}
	];
});
