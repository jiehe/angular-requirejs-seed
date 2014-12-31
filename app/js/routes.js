'use strict';

define(['angular', 'app'], function(angular, app) {

	//return app.config(['$routeProvider', function($routeProvider) {
	//	$routeProvider.when('/view1', {
	//		templateUrl: 'app/tpl/partial1.html',
	//		controller: 'MyCtrl1'
	//	});
	//	$routeProvider.when('/view2', {
	//		templateUrl: 'app/tpl/partial2.html',
	//		controller: 'MyCtrl2'
	//	});
	//	$routeProvider.when('/view3', {
	//		templateUrl: 'app/tpl/partial3.html',
	//		controller: 'MyCtrl3'
	//	});
    //
	//	$routeProvider.otherwise({redirectTo: '/view1'});
	//}]);
	return app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');
		$stateProvider
			.state('index', {
				url: '/index',
				views: {
					'': {
						templateUrl: 'app/tpl/index.html'
					}
					//'main@index': {
					//	templateUrl: 'app/tpl/loginForm.html'
					//}
				}
			})
			.state("view",{
				url:"/view/:number/:name",
				templateUrl:"./app/tpl/partial3.html",
				controller:function($scope, $stateParams){
					$scope.number = $stateParams.number;
					$scope.name = $stateParams.name;
				}
			})

	});

});

