import { useState } from "react";

function Searchbar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border p-2 rounded w-64"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
    </form>
  );
}

export default Searchbar;
