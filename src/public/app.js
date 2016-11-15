 // INITILIZE APP
// ============================================================
var app = angular.module("parks", ["ui.router"]);

// CONFIG
// ============================================================
app.config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ============================================================
  $stateProvider


    .state('home', {
      url: '/home',
      templateUrl: './home/homeTempl.html',
      controller: 'homeCtrl'
    })


    .state('parks', {
      url: '/community',
      templateUrl: './community/community.html',
      controller: 'communityCtrl'
    })



    .state('amusement', {
      url: '/amusement',
      templateUrl: './amusement/amusement.html',
      controller: 'amusementCtrl'
    })



    .state('state', {
      url: '/state',
      templateUrl: './state/state.html',
      controller: 'stateCtrl'
    })



    .state('login', {
      url: '/login',
      templateUrl: './login/login.html',
      controller: 'loginCtrl'

      // resolve: {
      // 				user: function(loginService, $state) {
      // 					return loginService.getCurrentUser()
      // 						.then(function(response) {
      // 							if (!response.data)
      // 								$state.go('login');
      // 							return response.data;
      // 						})
      // 						.catch(function(err) {
      // 							$state.go('login');
      // 						});
      // 				}
      // 			}
});






  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
