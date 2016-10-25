// REACT/REACTDOM
import React from "react"; // SAME AS var React = require("react");

// var About = React.createClass({
//     render: function(){
//         return (
//             <h1>About component!</h1>
//         );
//     }
// });

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application which allows a user to search for the current temperature in a city. It was built with React.js to demonstrate the use of React.</p>
            <p>I used the <a href="https://openweathermap.org/api">Open Weather Map</a> to API to pull the weather data.</p>
            <p>You can go <a href="https://github.com/aawalker238/ReactWeather">here</a> to see the code behind this app</p>
            
        </div>
    );
}

export default About; // SAME AS module.exports = Weather;

