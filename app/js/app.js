'use strict';

define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	'uiRouter',
	], function (angular, filters, services, directives, controllers) {

		// Declare app level module which depends on filters, and services
		
		return angular.module('myApp', [
			'ui.router',
			'myApp.filters',
			'myApp.services',
			'myApp.directives',
			'myApp.controllers'
		]);
});
