// INITILIZE DIRECTIVE
// ============================================================
angular.module("parks").directive('navBar', function() {
  return {
    restrict: 'EA',
    templateUrl: './navBar/navBarTempl.html',
    // controller: 'someCtrl'
  };
});
