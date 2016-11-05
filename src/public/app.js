 // INITILIZE APP
// ============================================================
var app = angular.module("parks", []);

// CONFIG
// ============================================================
app.config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // HOME STATE
    .state('home', {
      url: '/',
      templateUrl: './app/routes/home/homeTmpl.html',
      controller: 'homeCtrl'
    })


    // HOME STATE
    .state('state', {
      url: '/state',
      templateUrl: './app/routes/home/homeTmpl.html',
      controller: 'stateCtrl'
    })


    // HOME STATE
    .state('amusement', {
      url: '/amusement',
      templateUrl: './app/routes/home/homeTmpl.html',
      controller: 'amusementCtrl'
    })


    // HOME STATE
    .state('community', {
      url: '/community',
      templateUrl: './app/routes/home/homeTmpl.html',
      controller: 'communityCtrl'
    });





  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
