/* Edited by Anh Vo on 07/08/2017
API: https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139

*/
var currlat=0;
var currlon = 0;
var currweather;
$getweather = $('.getweather');
$getweather.click(GetLocation);
/*Get the longitute and latitude of current location*/
function GetLocation (){
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    currlat =  position.coords.latitude;
    currlon = position.coords.longitude;
/*AJAX*/

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?appid=f5aad87259b289ac34687514827b8dfb' + '&lat=' + currlat + '&lon=' + currlon,
        data: data,
        success: function(data){
            currweather += '<ul>';
            $.each(data, function(i, main){
                currweather += '<li><p>Weather: ' + data.main.temp + '</li>';
            });
            currweather+= '</ul>';
            $('#data').html(currweather);
        }

    })




/*ajax******/
    
  });
  
}
  else {
    alert('Sorry! We could not access your location longitute')
  }
};
/*End Get the longitute and latitude of current location*/

