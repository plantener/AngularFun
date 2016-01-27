var app = angular.module('myApp', [
	'ngRoute'
	]);

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/dropdowns', {
			templateUrl: 'app/views/dropdowns.html',
			controller: 'DropdownsCtrl'
		})
		.otherwise({
			redirectTo: '/dropdowns'
		});
	}]);

app.controller( 'MainCtrl', function ($scope){
	// $scope.colours = [{
	// 	name: "Red",
	// 	hex: "#F21B1B"
	// }, {
	// 	name: "Blue",
	// 	hex: "#1B66F2"
	// }, {
	// 	name: "Green",
	// 	hex: "#07BA16"
	// }];
	// $scope.selectedColour = "";

	// $scope.hej = "Hello World!";
});

app.run(function($rootScope) {

	// Used to collapse dropdowns on document click
	angular.element(document).on("click", function(e) {
		$rootScope.$broadcast("documentClicked", angular.element(e.target));
	});
});