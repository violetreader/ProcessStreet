const angular = require("angular.min.js");

const app = angular.module("myApp", []);

app.controller("myController", function($scope) {
	$scope.message = "rainin";
});