
angular.module("parks").service("loginService", function($http) {
//  this.signup=function(user){
// console.log(user);
//   $http.post("/register",{user: user}).then(function(response){
// console.log(response);
//
// })
//
// }

this.login = function(user) {
console.log(user);
  return $http({
    method: 'POST',
    url: '/login',
    data: user
  }).then(function(response) {
console.log(response + " I AM SERVICE");
    return response;
  });
};

this.getCurrentUser = function() {
  return $http({
    method: 'GET',
    url: '/me'
  }).then(function(response) {
    return response;
  });
};

});
