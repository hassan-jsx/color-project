import React, { Component } from 'react';
import Pallete from './Pallete';
import SeedsColors from './SeedsColors';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Pallete {...SeedsColors[5]} />
            </div>
        );
    }
}

export default App;
