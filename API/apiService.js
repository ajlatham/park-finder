
angular.module("parks").service("apiService", function($http) {

  this.getCollection = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/collection' + query
    }).then(function(response) {
      if (response.data.length < 2) return response.data[0];
      return response.data;
    });
  };
  this.createCollection = function(collection) {
    return $http({
      method: 'POST',
      url: '/collection',
      data: collection
    }).then(function(response) {
      return response;
    });
  };
  this.editCollection = function(id, collection) {
    return $http({
      method: 'PUT',
      url: "/collection/" + id,
      data: collection
    }).then(function(response) {
      return response;
    });
  };
  this.deleteCollection = function(id) {
    return $http({
      method: 'DELETE',
      url: '/collection/' + id
    }).then(function(response) {
      return response;
    });
  };



});
