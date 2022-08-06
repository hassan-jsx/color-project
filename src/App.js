import React, { Component } from 'react';
import Pallete from './Pallete';
import SeedsColors from './SeedsColors';
import { generatePalette } from './ColorHelper';

export class App extends Component {
    render() {
        console.log(generatePalette(SeedsColors[4]));
        return (
            <div className="App">
                <Pallete {...SeedsColors[2]} />
            </div>
        );
    }
}

export default App;
