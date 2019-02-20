import React from 'react';
import './ChordButton.scss';
import color from '../../Color';
const ChordButton = (props) => {
    const { ChordName,AddPadfn } = props;
    const buttonColor = ChordName.charCodeAt(0) % 65;
    return (
        <button onClick={AddPadfn} className={`AddChordButton ${color[buttonColor]}`}>
            {ChordName}
        </button>
    );
};

export default ChordButton;