import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";

class App extends Component {
    render() {
        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div style={divStyle}>
                <h1 style={{color: 'blue', fontSize: '20px'}}>Hello world!</h1>
            </div>
        );
        <Car />
    }
}

export default App;
