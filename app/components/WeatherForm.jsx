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
                        <input type="search" className="form-control" placeholder="Search weather by city name..." ref="location" />
                    </div>
                    <div className="form-group">
                        <button className="button expanded hollow">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

export default WeatherForm;