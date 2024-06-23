import './App.css';
import React from 'react';
import WeatherComponent from './Components/WeatherComponent'; // Import the WeatherComponent

function App() {
    
    const city = ['Cape Town', 'New York', 'London'];

    return (
        <div className="App">
            <h1>Weather App</h1>
            {/*.map() to iterate over the cities array and render a WeatherComponent for each city */}
            {city.map((city, index) => (
            
            <WeatherComponent key={index} city={city} />
            ))}
        </div>
    );
}

export default App;

