// REACT/REACTDOM
import React from "react"; // SAME AS var React = require("react");

import Nav from "Nav";
import Footer from "Footer";

// var Main = React.createClass({
//     render: function(){
//         return (
//             <div>
//                 <Nav />
//                 <div className="container">
//                     <h1 className="text-xs-center">Get Weather</h1>
//                     {this.props.children}
//                 </div>
//             </div>
//         );
//     }
// });

var Main = (props) => {
    return (
            <div>
                <Nav />
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        {props.children}
                    </div>
                </div>
                <Footer />
            </div>
        );
}

export default Main; // SAME AS module.exports = Main;

