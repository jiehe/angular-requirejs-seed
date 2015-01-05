
define(['../controllers', 'jquery', 'jCloud'], function (controllers, $) {
	controllers.controller('tagCloud', ['$scope', '$http', function($scope, $http) {
		$scope.name='tagCloud';
		$http.get("app/json/tagCloud.json")
			.success(function(data){
				var word_list = data;
				$("#tagCloud").jQCloud(word_list);
			})
	}])
});