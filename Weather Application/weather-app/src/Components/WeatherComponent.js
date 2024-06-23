import React, { useState, useEffect } from 'react';
import './WeatherComponent.css';

function WeatherComponent(props) {
    // Accessing city information from props
    const city = props.city;

    // This is the state for weather data
    const [weatherData, setWeatherData] = useState(null);

    // Your API key for OpenWeatherMap API
    const apiKey = '26ea9b4be2e50830ac35d6529eea1350'; // Use your API key for OpenWeatherMap API that you signed up with

    // useEffect to fetch weather data when component mounts
    useEffect(() => {
        const fetchWeatherData = async () => {
            // Try and Catch
            try {
                // Check if city is provided
                if (!city) {
                    console.error("City not provided for WeatherComponent");
                    return; // Exit early if no city is provided
                }

                // Fetch weather data from OpenWeatherMap API
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
                );

                // Check if API response is okay
                if (!response.ok) {
                    console.error(`Failed to fetch weather data: ${response.statusText}`);
                    return;
                }

                // Parse response
                const data = await response.json();

                // Set the state with the fetched data
                setWeatherData(data);
            } catch (error) {
                console.error(`Error fetching weather data: ${error.message}`);
            }
        };

        // Call the function to fetch weather data
        fetchWeatherData();
     }, [city, apiKey]); // Dependencies for useEffect

    return (
    <div className="weather-component">
        {weatherData ? (
        <div>
        <h2>{weatherData.name}</h2> 
        {/* Show temperature if available */}
        {weatherData.main && weatherData.main.temp !== undefined && (
        <p>Temperature: {weatherData.main.temp}°C</p>
        )}

        {/* Show description if available */}
        {weatherData.weather && weatherData.weather[0] && weatherData.weather[0].description && (
        <p>Weather: {weatherData.weather[0].description}</p>            
        )}

    </div>
        ) : (
         <p>Loading...</p>
            )}
        </div>
    );
}

export default WeatherComponent;
