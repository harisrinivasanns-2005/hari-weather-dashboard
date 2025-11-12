import { useState } from "react";
import Searchbar from "./components/Searchbar";
import CurrentWeather from "./components/currentweather";
import Forecast from "./components/forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeatherData = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const [weatherResponse, forecastResponse] = await Promise.all([
      fetch(weatherUrl),
      fetch(forecastUrl),
    ]);

    const weatherData = await weatherResponse.json();
    const forecastData = await forecastResponse.json();

    setWeather(weatherData);
    setForecast(forecastData);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">🌤️ Weather Dashboard</h1>
      <Searchbar onSearch={fetchWeatherData} />
      {weather && <CurrentWeather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;

