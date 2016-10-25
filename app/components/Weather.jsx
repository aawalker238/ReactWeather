// REACT/REACTDOM
import React from "react"; // SAME AS var React = require("react");
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import openWeatherMap from "openWeatherMap";
import ErrorModal from "ErrorModal";


var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        };
    },
    handleSearch: function(location){
        var _this = this;
        

        this.setState({
            isLoading:true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        // location = location[0].toUpperCase()+location.substring(1).toLowerCase();
        var locationArray = location.split(" ");
        var newLocationArray = locationArray.map(function(word){
            return word[0].toUpperCase()+word.substring(1).toLowerCase();
        });

        location = newLocationArray.join(" ");
        
        openWeatherMap.getTemp(location)
            .then(function(temp, name){
                temp = Math.round(temp);
                _this.setState({
                    location,
                    temp,
                    isLoading:false
                });
            }, function(e){
                _this.setState({
                    isLoading:false,
                    errorMessage: e.message
                });
            });
    },
    componentDidMount: function(){
        var location = this.props.location.query.location;

        if(location && location.length > 0){
            this.handleSearch(location);
            window.location.hash = "#/";
        }
    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;

        if(location && location.length > 0){
            this.handleSearch(location);
            window.location.hash = "#/";
        }
    },
    render: function(){
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return (
                    <h3>Fetching weather...</h3>
                );
            }
            else if(temp && location){
                
                return (
                    <WeatherMessage location={location} temp={temp} />
                );
            }
        }

        function renderError () {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

export default Weather; // SAME AS module.exports = Weather;

