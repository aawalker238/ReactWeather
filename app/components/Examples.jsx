// REACT/REACTDOM
import React from "react"; // SAME AS var React = require("react");
import {Link} from "react-router";
// var Examples = React.createClass({
//     render: function(){
//         return (
//             <h1>Examples component!</h1>
//         );
//     }
// });


var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Hereare a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Seattle">Seattle, WA</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
            </ol>
        
        </div>
    );
}


export default Examples; // SAME AS module.exports = Weather;

