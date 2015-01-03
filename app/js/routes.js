'use strict';

define(['angular', 'app'], function(angular, app) {

	return app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');
		$stateProvider
			.state('index', {
				url: '/index',
				views: {
					'': {
						templateUrl: 'app/tpl/index.html'
					},
					"header@index":{
						templateUrl:'app/tpl/header.html',
						controller:'MyCtrl2'
					},
					"content@index":{
						templateUrl:'app/tpl/content.html'
					}

					//'main@index': {
					//	templateUrl: 'app/tpl/loginForm.html'
					//}
				}
			})


	});

});

