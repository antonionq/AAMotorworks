var app = angular.module('aaM', ['ui.router', 'uiGmapgoogle-maps']);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../templates/home.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: '../templates/aboutView.html'
    })

		.state('services', {
      url: '/services',
      templateUrl: '../templates/servicesView.html'
    })

		.state('contact', {
      url: '/contact',
      templateUrl: '../templates/contactView.html',
			controller: 'contactCtrl'
    })

});
