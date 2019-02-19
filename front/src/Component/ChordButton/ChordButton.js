import React from 'react';
import './ChordButton.scss';
const ChordButton = (props) => {
    const { ChordName,AddPadfn } = props;
    return (
        <button onClick={AddPadfn} className="AddChordButton">
            {ChordName}
        </button>
    );
};

export default ChordButton;