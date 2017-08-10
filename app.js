/* Edited by Anh Vo on 07/08/2017
API: https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139

*/
var currlat=0;
var currlon = 0;
$getweather = $('.getweather');
$getweather.click(function GetLocation (){
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
   return  currlat =  position.coords.latitude;
   return currlon = position.coords.longitude;
  });
}
  else {
    alert('Sorry! We could not access your location longitute')
  }
});