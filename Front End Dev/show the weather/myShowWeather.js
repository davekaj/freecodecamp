
  var obj = {};
  
  //gets the city location from here
  obj.getLoc = function() {
    return $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
  };
  
  //takes the city, and goes and grabs location data from the place!
  obj.getCurrent = function(city) {
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var units = "&units=metric";
    var appid = "&APPID=9bd6646eaa853a76717cfc7685d4bef0" //this is my key
    var cb = "&callback=JSON_CALLBACK";
    var getWeather = api + units + appid + cb;
    return $http.jsonp(getWeather);
  };
  $(".message").html(getWeather);
