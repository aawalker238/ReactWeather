import React from "react";

var WeatherForm = React.createClass({
    
    onFormSubmit:function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        if(location.length > 0){
            this.refs.location.value = "";
            this.props.onSearch(location); //calls parent
        }
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter a city name" ref="location" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

export default WeatherForm;