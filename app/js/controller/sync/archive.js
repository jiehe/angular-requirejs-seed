
define(['../controllers'], function (controllers) {
	controllers.controller('archive', ['$scope','$http' ,'$location',function($scope, $http,$location) {
		var key = $location.$$path.slice($location.$$path.lastIndexOf('/') + 1);
		$scope['archiveTitle'] = key;
		$http.get("php/openapi/getArticleName.php")
			.success(function(data){
				$scope.items = data[key];

			})
	}])
});