define([], function() {
	return ['$scope', '$http', function($scope, $http) {

		$scope.aside.tagCould = "标签云";
		$scope.aside.tag = "最新文章哇";

		$scope.$apply();
	}];
});
