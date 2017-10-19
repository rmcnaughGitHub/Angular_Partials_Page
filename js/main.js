var thisWebApp = function(){
	'use strict'
	
	function Run(){
		//Angular
		var app = angular.module('website', ['ngRoute']);
		app.config( function($routeProvider){
			$routeProvider
				.when('/navigation', {template: '/partials/navigation.html'})
				.when('/header', {template: '/partials/header.html'})
				.when('/content', {template: '/partials/content.html'})
				.when('/footer', {template: '/partials/footer.html'})
				.otherwise({redirectTo:'404', template:'partials/404.html'})
			});
		;
		console.log('RUN');
	}

	Run();

}();