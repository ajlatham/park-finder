// INITILIZE DIRECTIVE
// ============================================================
angular.module("parks").directive('apiDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './API/apiIndex.html',
    controller: 'apiCtrl',
scope:{
parkType:"="
}
  };
});
