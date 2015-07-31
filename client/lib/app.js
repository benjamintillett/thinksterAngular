function IndexCtrl(){
	var self = this;

	self.toggleSidenav = function(menuId){
		$mdSidenav(menuId).toggle();
	};
}

function Config($urlRouterProvider, $stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('/',{
			url: '/',
			templateUrl: "client/index.ng.html",
			controller: "IndexCtrl as index"
		})
	$urlRouterProvider.otherwise('/');
}

if (Meteor.isClient){
	angular.module('app',['angular-meteor','ui.router'])
		.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',Config])
		.controller('IndexCtrl',IndexCtrl)
 }