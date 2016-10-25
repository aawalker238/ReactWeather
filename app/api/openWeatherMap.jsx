import axios from "axios";

//OPENWEATHERMAP API KEY
const API_KEY = "fc0535c90c28a01734987112b663ca23"; //when using const it is conventional to use all uppercase letters and connect words with underscores

const BASE_URL_OPENWEATHERMAP = `http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=${API_KEY}`




export default {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${BASE_URL_OPENWEATHERMAP}&q=${encodedLocation}`;
        
        return axios.get(requestUrl)
            .then(function (res) {
                // debugger;
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }
            }, function (err) {
                throw new Error(err.data.message);
            });
    } 
};