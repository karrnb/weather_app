import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Display = (data) => (
    <div className="row">
        {/* a div to display the fetched result */}
        { data.errorMsg && <div className="alert alert-warning errorMsg" role="alert"> { data.errorMsg } </div> }
        <ul className="list-group list-group-flush">
            { data.city && <li className="list-group-item">City: { data.city }</li>}
            { data.temp && <li className="list-group-item">Temperature: { data.temp }&deg;F</li>}
            { data.desc  && <li className="list-group-item">Description: { data.desc }</li>}
            { data.humidity && <li className="list-group-item">Humidity: { data.humidity }%</li>}
            { data.pressure && <li className="list-group-item">Pressure: { data.pressure } hPA</li>}            
        </ul>
    </div>
);

export default Display;