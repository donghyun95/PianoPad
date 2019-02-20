import React, { Component } from 'react';
import PadList from '../Component/PadList/PadList';
import {connect} from 'react-redux';
import Actions from '../Actions/Actions';
import soundfont from 'soundfont-player';
class PadContainer extends Component {
    IntervalTimer = null;
    Sound = null;
    AC = null;
    state = {
        ISMOUSEDOWN: false
    }
    constructor(props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }

    componentDidMount() {
        this.AC = new AudioContext();
        this.Sound = soundfont.instrument(this.AC, 'acoustic_grand_piano',{gain: 1});
    }

    handleStart() {
        if(!this.IntervalTimer)
        this.IntervalTimer = setInterval(()=> {
            this.props.IncreaseCount();
            const curValue = this.props.curCount;
            this.Sound.then((piano)=>{
                for(let i = 0; i < this.props.PadState.length; i++) {
                    if(this.props.PadState[i].status[curValue]){
                        piano.play(this.props.PadState[i].CHORD);
                    }
                }
            });
        }, 300);
    }

    handlePause() {
        clearInterval(this.IntervalTimer);
        this.IntervalTimer = null;
    }

    handleStop() {
        clearInterval(this.IntervalTimer);
        this.IntervalTimer = null;
        this.props.InitializeCount();
    }

    render() {
        const {curCount, PadState} = this.props;
        const hasPadList = PadState.map((item,index)=> <PadList Makenumber={31} curCount={curCount} CHORD={item.CHORD} PadData={item.status} key={index} PadIndex={index} 
        ReverseStatus={this.props.ReverseStatus}></PadList>)
        return (
            <div>
                {hasPadList}
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handlePause}>Pause</button>
                <button onClick={this.handleStop}>Stop</button>
            </div>        
        );
    }
}

const mapStateToProps = (state) => ({
    curCount : state.curCount,
    PadState : state.PadState
});

const mapDispatchToProps = (dispatch) => ({
    IncreaseCount : () => dispatch(Actions.increasecount()),
    InitializeCount : () => dispatch(Actions.initializecount()),
    ReverseStatus : (PadIndex, statusIndex,PadStatus) => dispatch(Actions.reversestatus(PadIndex,statusIndex,PadStatus))
});
export default connect(mapStateToProps,mapDispatchToProps)(PadContainer);