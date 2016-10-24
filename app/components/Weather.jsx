// REACT/REACTDOM
import React from "react"; // SAME AS var React = require("react");
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import openWeatherMap from "openWeatherMap";

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        };
    },
    handleSearch: function(location){
        var _this = this;
        

        this.setState({isLoading:true});

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
            }, function(errorMessage){
                _this.setState({
                    isLoading:false
                });
                alert(errorMessage);
                
            });
       
    },
    render: function(){
        var {isLoading, temp, location} = this.state;

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
        return (
            <div>
                <h1>Weather component!</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

export default Weather; // SAME AS module.exports = Weather;

