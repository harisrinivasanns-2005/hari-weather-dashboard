import { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    try {
      setError("");
      setWeather(null);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        }
      );
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found.");
      } else {
        setError("Failed to fetch weather. Try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 font-sans">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-6 flex items-center gap-2">
        🌈 Weather Dashboard
      </h1>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="🔍 Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 border border-gray-300 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500"
        />
        <button
          onClick={fetchWeather}
          className="px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90"
        >
          Get Weather 🌦️
        </button>
      </div>

      {error && <p className="text-red-600 font-medium mt-2">{error}</p>}

      {weather && (
        <div className="bg-white shadow-2xl rounded-2xl p-6 mt-6 w-80 text-gray-700 transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-purple-700 mb-2">{weather.name}</h2>
          <p className="text-lg">🌡️ Temperature: <span className="font-semibold">{weather.main.temp} °C</span></p>
          <p className="text-lg">💧 Humidity: <span className="font-semibold">{weather.main.humidity}%</span></p>
          <p className="text-lg">🌬️ Wind: <span className="font-semibold">{weather.wind.speed} m/s</span></p>
          <p className="mt-2 text-lg">
            🌤️ Condition: <span className="capitalize font-medium">
              {weather.weather[0].main} ({weather.weather[0].description})
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
