/* Edited by Anh Vo on 07/08/2017
API: https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139

*/
var currlat=0;
var currlon = 0;
var currweather;
var iconcode;
var description;
$(document).ready(function(){


/*Get the longitute and latitude of current location*/
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    currlat =  position.coords.latitude;
    currlon = position.coords.longitude;
/*End Get the longitute and latitude of current location*/

/*REQUEST TO API*/

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?appid=f5aad87259b289ac34687514827b8dfb' + '&lat=' + currlat + '&lon=' + currlon,
        data: '',
        cache: false,
        success: function(data){
/** Get temperature data */ 
           
            $.each(data, function(i, main){
                var tempweather = data.main.temp ;
                currweather = tempweather - 273.15 + '&#176';

            });
/** End get temperature data */

/** Show icon weather depending on weather */
            $.each(data, function(i, weather){
                iconcode = data.weather[0].icon;
                description = data.weather[0].main;

            });
 /** End show icon weather depending on weather */
            $('#data').html(currweather);
            $("#icon").html("<img src='http://openweathermap.org/img/w/" + iconcode + ".png'>");
            $('#description').html(description);
        }
    });
/*END REQUEST*/
  })
  }
});/***END READY */