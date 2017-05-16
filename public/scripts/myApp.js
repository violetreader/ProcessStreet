const angular = require("https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js");

var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});