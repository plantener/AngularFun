// TODO: How is this done in SmartReception?
// var controllers = angular.module('controllers', []);

app.controller('DropdownsCtrl', ['$scope',
	function ($scope){
		$scope.colours = [{
			name: "Red",
			hex: "#F21B1B"
		}, {
			name: "Blue",
			hex: "#1B66F2"
		}, {
			name: "Green",
			hex: "#07BA16"
		}];
		$scope.selectedColour = "";

		$scope.hej = "Hello World!";
	}]);