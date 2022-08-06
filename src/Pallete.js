import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

export class Pallete extends Component {
    render() {
        const colorBoxes = this.props.colors.map((color) => (
            <ColorBox background={color.color} name={color.name} />
        ));

        return (
            <div className="Pallete">
                {/* Navbaar */}
                <div className="Palette-colors">{colorBoxes}</div>
                {/* footer */}
            </div>
        );
    }
}

export default Pallete;
