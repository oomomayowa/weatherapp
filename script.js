let apiKey = "5c4d75ed66ac3bce65c2ab968c6a990e"

const check = (city) => {
    let myDate = new Date().toLocaleDateString()
    let cityName = document.getElementById("myCity").value;
    let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    if (myCity.value.length == ""){
        alert("Enter a valid location");
    }else{
        document.getElementById("date").innerHTML = myDate;
        fetch(endPoint)
.then((response) => response.json())
.then((convertedResponse) => {
   console.log(convertedResponse)
   document.getElementById("city").innerHTML =`${convertedResponse.name}  ${convertedResponse.sys.country}`;
   document.getElementById("cityD").innerHTML = convertedResponse.weather[0].description;
   document.getElementById("temp").innerHTML = Math.round(convertedResponse.main.temp) + "&#176;" + "C";
   document.getElementById("nameCity").innerHTML =`${convertedResponse.name}  ${convertedResponse.sys.country}`;
   document.getElementById("cityDetails").innerHTML = convertedResponse.weather[0].description;
   document.getElementById("humidity").innerHTML = `${convertedResponse.main.humidity}%`;
   document.getElementById("wind").innerHTML = `${convertedResponse.wind.speed} m/s`;
   document.getElementById("lon").innerHTML = convertedResponse.coord.lon + "°";
   document.getElementById("las").innerHTML = convertedResponse.coord.lat + "°";
   document.getElementById("tempMin").innerHTML = (convertedResponse.main.temp_min) + "&#176;" + "C";
   document.getElementById("tempMax").innerHTML = (convertedResponse.main.temp_max) + "&#176;" + "C";
   document.getElementById("whatFeels").innerHTML = (convertedResponse.main.feels_like) + "&#176;" + "C";
   document.getElementById("press").innerHTML = (convertedResponse.main.pressure) + ' hPa';
})
}
}

const autoLocate = () => {
    navigator.geolocation.getCurrentPosition((location) => {
        let myLatitude = location.coords.latitude;
        let myLongitude = location.coords.longitude;
        let myEndPoint2 = `https://api.openweathermap.org/data/2.5/weather?lat=${myLatitude}&lon=${myLongitude}&appid=${apiKey}&units=metric`;
        fetch(myEndPoint2)
          .then((response) => response.json())
          .then((myData) => {
            temp.innerHTML = myData.main.temp.toFixed(0) + "&#176;" + "C";
            document.getElementById("city").innerHTML =`${myData.name}  ${myData.sys.country}`;
   document.getElementById("cityD").innerHTML = myData.weather[0].description;
   document.getElementById("temp").innerHTML = Math.round(myData.main.temp) + "&#176;" + "C";
   document.getElementById("nameCity").innerHTML =`${myData.name}  ${myData.sys.country}`;
   document.getElementById("cityDetails").innerHTML = myData.weather[0].description;
   document.getElementById("humidity").innerHTML = `${myData.main.humidity}%`;
   document.getElementById("wind").innerHTML = `${myData.wind.speed} m/s`;
   document.getElementById("lon").innerHTML = myData.coord.lon + "°";
   document.getElementById("las").innerHTML = myData.coord.lat + "°";
   document.getElementById("tempMin").innerHTML = (myData.main.temp_min) + "&#176;" + "C";
   document.getElementById("tempMax").innerHTML = (myData.main.temp_max) + "&#176;" + "C";
   document.getElementById("whatFeels").innerHTML = (myData.main.feels_like) + "&#176;" + "C";
   document.getElementById("press").innerHTML = (myData.main.pressure) + ' hPa';
          });
      });
}

