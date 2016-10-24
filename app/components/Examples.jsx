// REACT/REACTDOM
import React from "react"; // SAME AS var React = require("react");

// var Examples = React.createClass({
//     render: function(){
//         return (
//             <h1>Examples component!</h1>
//         );
//     }
// });


var Examples = (props) => {
    return (
        <h1>Examples component!</h1>
    );
}


export default Examples; // SAME AS module.exports = Weather;

