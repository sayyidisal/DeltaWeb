(function() {

	angular.module('platform-list', [])

	.directive('navBar', [function() {
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

	.controller('ListCtrl', ['$http', '$scope', function($http, $scope) {
		// get initial questions
		// $scope.questions=[];
		// $scope.tags=[];
		// $http.get('/init_questions.json').success(function(data) {
		// 	$scope.questions=data.questions; 
		// 	$scope.questions=data.tags; 
		// 	$scope.$apply();
		// })

		$scope.questions = [{
			title: "How to test a class that has private methods, fields or inner classes",
			desc: "How do I use JUnit to test a class that has internal private methods, fields or nested classes? It seems bad to change the access modifier for a method just to be able to run a test.",
			author: "Tacher A",
			author_url: "",
			tags: ["Ma", "Java", "Unit-testing"],
			url: "question.html",
			show: true,
		}, {
			title: "JavaScript unit test tools for TDD",
			desc: "I've looked into and considered many JavaScript unit tests and testing tools, but have been unable to find a suitable option to remain fully TDD compliant. So, is there a JavaScript unit test tool that is fully TDD compliant?",
			author: "Tacher B",
			author_url: "",
			tags: ["CS", "Java", "TDD"],
			url: "question.html",
			show: true,
		}, {
			title: "What is Unit test, Integration Test, Smoke test, Regression Test?",
			desc: "What is Unit test, Integration Test, Smoke test, Regression Test and what are the differences between them? And Which tools can I use for each of them? For example I use JUnit and NUnit for Unit testing and Integration Testing. Are there any Smoke Test or Regression Test tools?",
			author: "Teacher C",
			author_url: "",
			tags: ["Ma", "TDD", "Definition"],
			url: "question.html",
			show: true,
		}, {
			title: "How can I test if an array contains a certain value?",
			desc: "I have a String[] with values like so: public static final String[] VALUES = new String[] {\"AB\",\"BC\",\"CD\",\"AE\"}; Given String s, is there a good way of testing whether VALUES contains s?",
			author: "Teacher D",
			author_url: "",
			tags: ["CS", "Java", "Array"],
			url: "question.html",
			show: true,
		}, {
			title: "How do I test if a string is empty in Objective C?",
			desc: "How do I test if an NSString is empty in Objective C?",
			author: "Teacher E",
			author_url: "",
			tags: ["CS", "Ios", "Object-c"],
			url: "question.html",
			show: true,
		}];

		// example of tags

		$scope.tags = ["Array", "CS", "Java", "Ios", "Ma"];

		$scope.activeFilter = "";

		$scope.initLoading = function() {
			$(function() {
				$(window).scroll(function() {
					if ($(window).scrollTop() > (30 + $('#loading').offset().top - $(window).height())) {

						// ajax to load more questions
						// $http.get('/question.json').success(function(data) {
						//  for (var i = data.tags.length - 1; i >= 0; i--) {
						// 		$scope.tags.push(data.tags[i]);
						// 	};
						//  for (var i = data.questions.length - 1; i >= 0; i--) {
						// 		$scope.questions.push(data.questions[i]);
						// 	};
						// 	if (data.tags.length==0) {
						// 		$('#loading').remove();
						//	};
						// 	$scope.$apply();
						// })

						//for demo purpose only (a sample question)
						$scope.questions.push({
							title: "How do I test if a string is empty in Objective C?",
							desc: "How do I test if an NSString is empty in Objective C?",
							author: "Teacher E",
							author_url: "",
							tags: ["CS", "Ios", "Object-c"],
							url: "",
							show: true,
						});
						$scope.tags.push("new");
						$scope.$apply();
						// end of demo

					};
				});
			});
		};

		$scope.initLoading();

		$scope.filter = function(tag) {
			$scope.activeFilter = tag;
			for (var i = 0; i < $scope.questions.length; i++) {
				$scope.questions[i].show = true;
				if (!contains($scope.questions[i].tags, tag) && tag != "") {
					$scope.questions[i].show = false;
				};
			};
		}

	}])

	.controller('PaginationCtrl', ['$scope', function($scope) {
		$scope.pageList = ["/ulr1", "/url2", "/url3", "/url4", "/url5"];
		$scope.prev = "/urlPrev";
		$scope.next = "/urlNext";
	}])

})()

function contains(a, obj) {
	var i = a.length;
	while (i--) {
		if (a[i] === obj) {
			return true;
		}
	}
	return false;
}