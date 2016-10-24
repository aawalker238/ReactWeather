// REACT/REACTDOM
import React from "react"; // SAME AS var React = require("react");
import ReactDOM from "react-dom"; // SAME AS var ReactDOM = require("react-dom");
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import Main from "Main";
import Weather from "Weather";
import About from "About";
import Examples from "Examples";

require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();



// COMPONENTS

// RENDER
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById("app")
);
