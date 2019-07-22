import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Form = (props) => (
    <form onSubmit={props.getWeather}>
        {/* we define a simple form that accepts integers as zipcodes */}
        <div className="form-group">
            <label htmlFor="inputZipcode">Zipcode: </label>
            <input type="number" className="form-control" id="inputZipcode" placeholder="Enter zipcode" />
        </div>
        <button type="submit" className="btn btn-primary">Get the Weather</button>
    </form>
);

export default Form;