
angular.module("parks").service("amusementService", function($http) {
  var GEO_KEY="AIzaSyDLhuIyRnU4Aw0LfIideKVGAMT-RBeauIY";
  var PLACES_KEY="AIzaSyDuUGIVkK95i5NaprW7UvpsQVCB06xhb7w";
  var location="";
  var radius= 8000;
  var type= "amusement_park";
  var PLACES_URL="https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
  var GEO_URL="https://www.googleapis.com/geolocation/v1/geolocate?";


this.getlocation = function(search){
console.log(search);
var radius = 100000;
var type = 'amusement_park';

  return $http({
    method: "GET",
    url: "/places",
    params: {
      location: search,
      radius: radius,
      type: type
    }

  }).then(function(response){
console.log(response);

  return response;
  })
}
});
