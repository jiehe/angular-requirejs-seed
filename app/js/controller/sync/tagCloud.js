
define(['../controllers', 'jquery', 'jCloud'], function (controllers, $) {
	controllers.controller('tagCloud', ['$scope','archive', function($scope,archive) {
		$scope.name='tagCloud';
		//$http.get("php/openapi/getArticleName.php")
		//	.success(function(data){
		//		$rootScope.tagCloud = data;
		//		var word_list = [];
		//		for(i in data){
		//			var obj ={
		//				"text":i,
		//				"link":{href:"#/index/tagCloud/"+i}
		//			};
		//			word_list.push(obj);
		//		}
		//		$("#tagCloud").jQCloud(word_list);
        //
		//	})
		archive.getData(function(data){
			var word_list = [];
			for(i in data){
				var obj ={
					"text":i,
					"link":{href:"#/index/tagCloud/"+i}
				};
				word_list.push(obj);
			}
			$("#tagCloud").jQCloud(word_list);

		})
	}])
});