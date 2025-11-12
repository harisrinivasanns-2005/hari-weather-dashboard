import { useState } from "react";
import Searchbar from "./components/Searchbar";
import CurrentWeather from "./components/currentweather";
import Forecast from "./components/forecast";

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<h1 className="text-4xl font-bold text-blue-600">
				Tailwind CSS is Working! 🎉
			</h1>
			<p className="mt-4 text-lg text-blue-500">If this text is styled, everythings fine!</p>
		</div>
	);
}

export default App;
