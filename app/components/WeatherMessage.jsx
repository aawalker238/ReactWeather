// REACT/REACTDOM
import React from "react"; // SAME AS var React = require("react");

// var WeatherMessage = React.createClass({
//     render: function(){
//         return (
//             <div>
//                 <p>The temperature in {this.props.location} is {this.props.temp} degrees (F)</p>
//             </div>
//         );
//     }
// });

var WeatherMessage = ({temp, location}) => {
    return (
            <div>
                <p>The temperature in {location} is {temp} degrees (F)</p>
            </div>
        );
}

export default WeatherMessage; // SAME AS module.exports = Weather;

