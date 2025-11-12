function CurrentWeather({ data }) {
  return (
    <div className="bg-blue-100 p-4 rounded shadow-md w-80 mx-auto mb-4">
      <h2 className="text-xl font-semibold">{data.name}</h2>
      <p className="capitalize">{data.weather[0].description}</p>
      <p className="text-2xl font-bold">{data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default CurrentWeather;
