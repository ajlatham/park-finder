// INITILIZE DIRECTIVE
// ============================================================
angular.module("parks").directive('apiDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/some/someTmpl.html',
    controller: 'someCtrl'
  };
});
