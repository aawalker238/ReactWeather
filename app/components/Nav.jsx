// REACT/REACTDOM
import React from "react"; // SAME AS var React = require("react");
import {Link,IndexLink} from "react-router";

// var Nav = React.createClass({
//     render: function(){
//         return (
//             <div>
//                 <nav className="navbar navbar-light bg-faded">
//                     <ul className="nav navbar-nav">
//                         <li className="nav-item active">
//                             <IndexLink activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/">Get Weather</IndexLink>
//                         </li>
//                         <li className="nav-item">
//                             <Link activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/about">About</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/examples">Examples</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         );
//     }
// });


var Nav = (props) => {
    return (
            <div>
                <nav className="navbar navbar-light bg-faded">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <IndexLink activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/">Get Weather</IndexLink>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/examples">Examples</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
}

export default Nav;