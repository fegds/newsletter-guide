'use strict';

var	Route = {
	coding: {
		id: 'CodingCtrl',
		template: 'coding.html',
		url: '/coding'
	},
	test: {
		id: 'TestCtrl',
		template: 'test.html',
		url: '/test'
	},
	tip: {
		id: 'TipCtrl',
		template: 'tip.html',
		url: '/tip'
	},
	design: {
		id: 'DesignCtrl',
		template: 'design.html',
		url: '/design'
	}
};

// Declare app level module which depends on filters, and services
// angular.module('FEBG', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
angular.module('NL', [
    'NL.controllers'
]).
config([
    '$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){

		var i, item, route;

		for(i in Route){
			item = Route[i];
			route = {
				templateUrl: 'partials/' + item.template,
				controller: item.id
			};

			$routeProvider.when(item.url, route);
		}
        $routeProvider.otherwise({
            redirectTo: Route.coding.url
        });

    }
]);

