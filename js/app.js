var app = angular.module('aaM', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider){

	$uiViewScrollProvider.useAnchorScroll();

	app.run(function($rootScope,$location,$stateParams, $anchorScroll){
  $rootScope.$on('$stateChangeSuccess', function(event, toState){
    if($stateParams.scrollTo){
      $location.hash($stateParams.scrollTo);
      $anchorScroll();
    }
  });
});


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

		.state('street', {
			url: '/street',
			templateUrl: '../templates/streetView.html'
		})

		.state('track', {
			url: '/track',
			templateUrl: '../templates/trackView.html'
		})

		.state('diesel', {
			url: '/diesel',
			templateUrl: '../templates/dieselView.html'
		})

		.state('offRoad', {
			url: '/offRoad',
			templateUrl: '../templates/offRoadView.html'
		})

		.state('custom', {
			url: '/custom',
			templateUrl: '../templates/customView.html'
		})

});