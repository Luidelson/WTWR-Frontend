export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const kelvin = data.main.temp;
  const fahrenheit = Math.round(((kelvin - 273.15) * 9) / 5 + 32);
  const celsius = Math.round(kelvin - 273.15);
  console.log(fahrenheit, celsius);

  const result = {};
  result.city = data.name;
  result.temp = { F: fahrenheit, C: celsius };
  result.type = getWeatherType(fahrenheit);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature <= 86) {
    return "warm";
  } else {
    return "cold";
  }
};
