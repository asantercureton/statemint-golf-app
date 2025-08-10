import React from "react";

const Weather = () => {
    // This component can be used to display weather information
    // Create a weather component that fetches and displays current weather data, as well as a 5-day forecast
    // For now, we'll use static data
    const currentWeather = {
        temperature: "72°F",
        condition: "Sunny with a chance of clouds",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
    };
    // You can replace the static data with an API call to fetch real weather data
    // For example, using OpenWeatherMap or any other weather API
    // const fetchWeatherData = async () => {
    //     const response = await fetch('API_URL');
    //     const data = await response.json();
    //     setCurrentWeather({
    //         temperature: data.main.temp,
    //         condition: data.weather[0].description,
    //         icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    //     });
    // };
    // useEffect(() => {
    //     fetchWeatherData();
    // }, []);
    return (
        <div className="weather-card bg-gray-600 text-white p-4 rounded-lg shadow-md w-full max-w-4xl">
                <p className="text-emerald-300 text-center text-sm mb-6">Check the weather before you hit the course!</p>

            <div className="flex flex-col justify-center items-center mb-2">
                <p className="text-lg mb-1 font-semibold">Current Weather:</p>
                <div className="flex flex-row items-center mb-1">
                    <img src={currentWeather.icon} alt="Weather Icon" className="w-10 h-10 mr-2" />
                    <span className="text-2xl font-semibold">{currentWeather.temperature}</span>
                </div>
                <p className="text-gray-300">{currentWeather.condition}</p>
            </div>
            {/* You can add more weather details or a forecast here */}
            <div className="mt-4 border-t border-gray-500"></div>
            <div className="mt-4">
                <h3 className="text-xl text-center font-semibold mb-4">7-Day Forecast</h3>
                {/* Placeholder for forecast data */}
                <ul className="flex flex-row justify-around overflow-x-scroll no-scrollbar w-full max-w-4xl text-gray-300 bg-gray-700 rounded-lg p-2 mt-2">
                    <div className="flex flex-col items-center text-center p-4 border-r border-gray-500">
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="Weather Icon" className="w-5 h-5 mb-1" />
                        </li>
                        <li>Sunday:</li>
                        <li>70°F,</li>
                        <li>Partly Cloudy</li>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border-r border-gray-500">
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="Weather Icon" className="w-5 h-5 mb-1" />
                        </li>
                        <li>Monday:</li>
                        <li>68°F,</li>
                        <li>Partly Cloudy</li>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border-r border-gray-500">
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="Weather Icon" className="w-5 h-5 mb-1" />
                        </li>
                        <li>Tuesday:</li>
                        <li>75°F,</li>
                        <li>Partly Cloudy</li>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border-r border-gray-500">
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="Weather Icon" className="w-5 h-5 mb-1" />
                        </li>
                        <li>Wednesday:</li>
                        <li>73°F,</li>
                        <li>Partly Cloudy</li>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border-r border-gray-500">
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="Weather Icon" className="w-5 h-5 mb-1" />
                        </li>
                        <li>Thursday:</li>
                        <li>71°F,</li>
                        <li>Partly Cloudy</li>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border-r border-gray-500">
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="Weather Icon" className="w-5 h-5 mb-1" />
                        </li>
                        <li>Friday:</li>
                        <li>69°F,</li>
                        <li>Partly Cloudy</li>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="Weather Icon" className="w-5 h-5 mb-1" />
                        </li>
                        <li>Saturday:</li>
                        <li>74°F,</li>
                        <li>Partly Cloudy</li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Weather;