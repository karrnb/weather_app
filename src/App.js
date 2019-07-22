import React from 'react';
import Form from './templates/form';
import Display from './templates/display';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// define variables to be used within the app
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_URL = 'http://api.openweathermap.org/data/2.5/'

class App extends React.Component {
    // state variable contains values fetched from the API
    state = {
        humidity: undefined,
        pressure: undefined,
        temp: undefined,
        city: undefined,
        desc: undefined,
        errorMsg: undefined
    }

    // we define a getWeather function to fetch the weather and set the state
    getWeather = async (e) => {
        e.preventDefault();
        const zipcode = e.target.elements.inputZipcode.value;
        if (zipcode) {
            
            const api_call = await fetch(`${API_URL}weather?zip=${zipcode},us&APPID=${API_KEY}&units=imperial`);
            const data = await api_call.json();

            // handle error cases
            if (data.message) {
                this.setState({
                    humidity: undefined,
                    pressure: undefined,
                    temp: undefined,
                    city: undefined,
                    desc: undefined,
                    errorMsg: data.message
                });
            } else {
                // correct case
                this.setState({
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    temp: data.main.temp,
                    city: data.name,
                    desc: data.weather[0].description,
                    errorMsg: ""
                });
            }            
        } else {
            //  handle form validation
            this.setState({
                humidity: undefined,
                pressure: undefined,
                temp: undefined,
                city: undefined,
                desc: undefined,
                errorMsg: "Please enter a zipcode!"
            });
        }
        
    }

    // render function with form elements
    render() {
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="col-lg-3 col-centered" >
                        <div className="card">
                            <h5 className="card-title display-3"> Weather App </h5>
                            < Form getWeather={this.getWeather}/>
                    
                            < Display 
                                city={this.state.city}
                                temp={this.state.temp}
                                desc={this.state.desc}
                                humidity={this.state.humidity}
                                pressure={this.state.pressure}
                                errorMsg={this.state.errorMsg}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
