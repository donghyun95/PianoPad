import React, { Component } from 'react';
import ChordButton from '../Component/ChordButton/ChordButton';
import {connect} from 'react-redux';
import Actions from '../Actions/Actions';
class ChordButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.ChordList = [];
        for(let i = 0; i <7; i++) {
            this.ChordList[i] = [];
            for(let j = 0; j < 7; j++) { //0부터 6까지
                const flatChord = `${String.fromCharCode(65+i)}b${j+1}`;
                const Chord = `${String.fromCharCode(65+i)}${j+1}`;
                const sharpChord = `${String.fromCharCode(65+i)}#${j+1}`;
                this.ChordList[i].push(<ChordButton key={flatChord} ChordName={flatChord} AddPadfn={props.AddPadfn(flatChord)}/>)
                this.ChordList[i].push(<ChordButton key={Chord} ChordName={Chord} AddPadfn={props.AddPadfn(Chord)}/>)
                this.ChordList[i].push(<ChordButton key={sharpChord} ChordName={sharpChord} AddPadfn={props.AddPadfn(sharpChord)}/>)
            }
        }
    }

    render() {
        return (
            <div>
                {this.ChordList[0]}
                {this.ChordList[1]}
                {this.ChordList[2]}
                {this.ChordList[3]}
                {this.ChordList[4]}
                {this.ChordList[5]}
                {this.ChordList[6]}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    
});
const mapDispatchToProps = (dispatch) => ({
    AddPadfn : (chord) => () => dispatch(Actions.addline(chord))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChordButtonContainer);