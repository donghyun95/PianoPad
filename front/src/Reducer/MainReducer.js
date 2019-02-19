import Actions from '../Actions/Actions';

const InitialState = {
    curCount: -1,
    PadState: [{CHORD:'Cb1',status:[true,false,false,false,false,true,false,false,true,true,false,true,false,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]},
               {CHORD:'Eb4',status:[true,false,false,true,false,false,false,false,true,true,false,true,false,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]}
              ]
}

export default function (state = InitialState, action) {
    switch(action.type) {
        case Actions.INCREASECOUNT :
            return Object.assign({}, state, {
                curCount: state.curCount+1 > 30 ? 0 : state.curCount+1
            });
        case Actions.INITIALIZECOUNT :
            return Object.assign({}, state, {
                curCount: -1
            });
        case Actions.REVERSESTATUS :
            const data = {
                CHORD: state.PadState[action.PadIndex].CHORD,
                status: [...state.PadState[action.PadIndex].status.slice(0,action.statusIndex), action.PadStatus, ...state.PadState[action.PadIndex].status.slice(action.statusIndex+1)]
            }
            return Object.assign({}, state, {
                PadState: [...state.PadState.slice(0,action.PadIndex), data, ...state.PadState.slice(action.PadIndex+1)]
            });
        case Actions.ADDLINE :
            const newline = {
                CHORD: action.chord,
                status: new Array(31).fill(false)
            }
            return Object.assign({}, state, {
                PadState: [...state.PadState.slice(),newline]
            });
        default : return state;
    }
}