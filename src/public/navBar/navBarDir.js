// INITILIZE DIRECTIVE
// ============================================================
angular.module("parks").directive('navBar', function() {
  return {
    restrict: 'EA',
    templateUrl: './parksApp/navBar/navBarTmpl.html',
    // controller: 'someCtrl'
  };
});
