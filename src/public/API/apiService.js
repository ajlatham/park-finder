
angular.module("parks").service("placesService", function($http) {
  var GEO_KEY="AIzaSyDLhuIyRnU4Aw0LfIideKVGAMT-RBeauIY";
  var PLACES_KEY="AIzaSyDuUGIVkK95i5NaprW7UvpsQVCB06xhb7w";
  var location="";
  var radius= 1000;
  var type= "park";
  var PLACES_URL="https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
  var GEO_URL="https://www.googleapis.com/geolocation/v1/geolocate?";


this.getlocation = function(search, type){
console.log(search);

  return $http({
    method: "GET",
    url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDuUGIVkK95i5NaprW7UvpsQVCB06xhb7w&location=" + search + "&radius=1000&type=" + type
  }).then(function(response){
console.log(response);

  return response;
  })
}
});
