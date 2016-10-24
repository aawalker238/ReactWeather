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


var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        alert("Not yet wired up!");
    },
    render: function(){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather</li>
                        <li>
                            <IndexLink activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/">Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/about">About</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/examples">Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
                
            </div>
        );
    }
})

export default Nav;


// var old = (
//     <nav className="navbar navbar-light bg-faded">
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
// )