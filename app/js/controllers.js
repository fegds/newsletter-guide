'use strict';

/* Controllers */
angular.module('NL.controllers', [])
    .controller('MainCtrl', ['$scope', '$location', '$http', '$window',
        function ($scope, $location, $http, $window){

			var i, item;
				// Current = JSON.parse(localStorage.getItem('Current') || '{}');
				// Current = localStorage.getItem('Current');

	/*
			if(!Current){
				localStorage.setItem('redirect', $window.location.href);
				$window.location.href = 'sign-in.html';
			}
			Current = JSON.parse(Current);
			$window['Current'] = Current;
			$http.defaults.headers.common['Authorization'] = Current.signin;
			*/

			var route = Route,
				menus = [
					{
						text: '开发',
						id: 'coding'
					},
					{
						text: '测试',
						id: 'test'
					},
					{
						text: '常见误区',
						id: 'tip'
					}
					/*
					{
						text: '给设计师',
						id: 'design'
					}
					*/
				];

			for(i=0; i<menus.length; i++){
				item = menus[i];
				item['ctrl'] = Route[item.id].id;
				item['url'] = Route[item.id].url;
			}

            $scope.menus = menus;

			$scope.$on('$routeChangeSuccess', function(e, current, previous) { 
				var currentCtrl = current.$$route ? current.$$route.controller : Route.coding.id,
					 prevCtrl = previous && previous.$$route ? previous.$$route.controller : '';
				if(prevCtrl){
					angular.element(document.getElementById('route_' + prevCtrl)).removeClass('active');
				}
				angular.element(document.getElementById('route_' + currentCtrl)).addClass('active');
			});

        }
    ])
    .controller('CodingCtrl', [
        function ($scope, $http, $filter, $routeParams, $location, $event){
		}
    ])
    .controller('TestCtrl', [
        function ($scope, $http, $filter, $routeParams, $location, $event){
		}
    ])
    .controller('TipCtrl', [
        function ($scope, $http, $filter, $routeParams, $location, $event){
		}
    ])
    .controller('DesignCtrl', [
        function ($scope, $http, $filter, $routeParams, $location, $event){
		}
    ])
	;
