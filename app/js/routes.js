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
					'header@index': {
						templateUrl: 'app/tpl/header.html'
					},
					'wrapper@index': {
						templateUrl: 'app/tpl/content/wrapper.html'
					},
					'tagCloud@index': {
						templateUrl: 'app/tpl/aside/tagCloud.html',
						controller:'tagCloud'
					},
					'tagArticle@index': {
						templateUrl: 'app/tpl/aside/tagArticle.html',
						controller:'tagArticle'
					},
					'footer@index': {
						templateUrl: 'app/tpl/footer.html'
					}
				}
			})
			.state('index.article',{
				url:'/article/:id',
				views:{
					'wrapper@index': {
						templateUrl:function(stateParam){
							return 'app/tpl/article/'+stateParam.id+'.html'
						}
					}
				}
			})
	});

});

