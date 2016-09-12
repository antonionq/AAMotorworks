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
      templateUrl: '../templates/aboutView.html',
			controller: 'contactCtrl'
    })

		.state('services', {
      url: '/services',
      templateUrl: '../templates/servicesView.html'
    })

		// .state('contact', {
    //   url: '/contact',
    //   templateUrl: '../templates/contactView.html',
		// 	controller: 'contactCtrl'
    // })

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

		$('ul.nav li.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(20).fadeIn(300);
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(20).fadeOut(300);
		});

});
