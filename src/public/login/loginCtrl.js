
angular.module("parks").controller("loginCtrl", function($scope, loginService, $state) {

  $scope.login = function(user) {
console.log(user.email, user.password);

    loginService.login(user).then(function(response) {
console.log(response + "AHHHHHHHH");
      if (!response.data) {
        alert('User does not exist');
        $scope.user.password = '';
      } else {
        $state.go('amusement');
      }
    }).catch(function(err) {

      alert('Unable to login');
console.log("HAY" + err);
    });
  };


});
