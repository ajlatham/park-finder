// INITILIZE CONTROLLER
// ============================================================
angular.module("parks")
.controller("amusementCtrl", function($scope, geocodingService, amusementService) {
  $scope.refresh=true;

$scope.initMap=function(locationArray, markerArray){

  var mymap = L.map('mapid').setView(locationArray, 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWpsYXRoYW0iLCJhIjoiY2l2OGU0aTdvMDAzeDJ0cGN0dXlwdnFmYSJ9.3ym-08sT6X63deVVmc2eAw', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 20,

  }).addTo(mymap);

function markerClick (lat, lng) {
  return function () {
    console.log(lat,lng);
    var win = window.open('http://www.google.com/maps/place/' + lat + ',' + lng, '_blank');
if (win) {
   //Browser has allowed it to be opened
   win.focus();
} else {
   //Browser has blocked it
   alert('Please allow popups for this website');
}
  }
}
  var markers = [];
for(var i = 0; i < markerArray.length; i++){
var location = markerArray[i].geometry.location;
  markers.push(L.marker([location.lat, location.lng]).addTo(mymap).on("click", markerClick(location.lat, location.lng)))
}

// for (var i = 0; i < markers.length; i++) {
//   markers[i].on("click",function(){
// console.log(this._latling.lat);
//
// })
// }

}
$scope.getlocation = function (search) {
$scope.refresh=false;
  geocodingService.geocode(search).then(function(location) {

    $scope.refresh=true;
console.log($scope.parkType);

    amusementService.getlocation("" +location.lat+ "," + location.lng, $scope.parkType ).then(function(response) {
      var markers = response.data.results;
  console.log(markers);

  $scope.initMap([location.lat,location.lng],markers)

    });


  });
};
$scope.getlocation('provo');

});
angular.module('parks').service('geocodingService', function($http) {
  this.geocode = function(address) {
    var addressArr = address.split(" ");
    if (addressArr.length > 1) {
      address = addressArr.join(",+");
    }

    return $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address
    }).then(function(response) {
      return response.data.results[0].geometry.location;
    });
  };
});
