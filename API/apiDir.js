// INITILIZE DIRECTIVE
// ============================================================
angular.module("parks").directive('apiDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/public/API/apiTmpl.html',
    controller: 'someCtrl'
  };
});
