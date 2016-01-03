(function() {
	var app = angular.module('platform-index', []);

	app.directive('navBar', [function() {
		return {
			restrict: 'E',
			templateUrl: "nav.html",
			// controlerAs:"nav", 
			controller: ['$scope', function($scope) {
				//pass links throught json
				$scope.links = {
					home: "index.html",
					other: "other.html",
					login: "login.html",
				}
			}],
		};
	}])

	app.controller('FuncCtrl', ['$scope', function($scope) {
		this.info = {
			loginAs: 0, //0 as not login, 1 as student, 2 as instructor
			username: "Wei",
		}
	}])

	app.controller('SignupCtrl', ['$scope', function($scope) {
		$scope.submitForm = function() {

			// check to make sure the form is completely valid

		};

	}])

})()

jQuery(document).ready(function($) {
	$('[data-toggle="tooltip"]').tooltip();
	$('#index-wrap').height($(window).height());
});