function Forecast({ data }) {
  const daily = data.list.filter((reading, index) => index % 8 === 0); // every 24 hrs

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
      {daily.map((item, index) => (
        <div
          key={index}
          className="bg-yellow-100 p-3 rounded shadow-md text-center"
        >
          <p className="font-semibold">
            {new Date(item.dt_txt).toLocaleDateString()}
          </p>
          <p>{item.weather[0].main}</p>
          <p>{item.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
