
define(['../controllers'], function (controllers) {
	controllers.controller('archive', ['$scope','archive' ,'$location',function($scope, archive,$location) {
		var key = $location.$$path.slice($location.$$path.lastIndexOf('/') + 1);
		$scope['archiveTitle'] = key;
		archive.getData(function(data){
				$scope.items = data[key];
			})
	}])
});