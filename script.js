function search() {
  var p = document.getElementById("inputCity").value;
  if (!p) {
    alert("Please enter a valid country name.");
    return;
  }
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${p}&appid=0d82c1105cbc8438e7fc8f4ff1db281f`;
  fetch(weatherUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      var temp = (data.main.temp - 273.15).toFixed(2) + "℃";
      var humidity = data.main.humidity + "%";
      var weather = data.weather[0].main;
      var wind = data.wind.speed;
      document.getElementById("Name").innerHTML = `Cityname: ${p}`;
      document.getElementById("Temp").innerHTML = `Temparature: ${temp}`;
      document.getElementById("Humidity").innerHTML = `Humdity: ${humidity}`;
      document.getElementById("Weather").innerHTML = `Weather: ${weather}`;
      document.getElementById("Wind").innerHTML = `Wind Speed: ${wind}`;
      document.getElementById("Data").style.display = "block";
      document.getElementById("inputCity").value = "";
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
