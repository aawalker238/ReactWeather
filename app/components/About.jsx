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
        <h1>About component!</h1>
    );
}

export default About; // SAME AS module.exports = Weather;

