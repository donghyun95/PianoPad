const INCREASECOUNT = "INCREASECOUNT";
const INITIALIZECOUNT = "INITIALIZECOUNT";
const REVERSESTATUS = "REVERSESTATUS";
const ADDLINE = "ADDLINE";
const REMOVELINE = "REMOVELINE";
const increasecount = () => ({
    type: INCREASECOUNT
});

const initializecount = () => ({
    type: INITIALIZECOUNT
});

const reversestatus = (PadIndex, statusIndex, PadStatus) => ({
    type: REVERSESTATUS,
    PadStatus: !PadStatus,
    PadIndex,statusIndex
});

const addline = (chord) => ({
    type: ADDLINE,
    chord
});

const removeline = (PadIndex) => ({
    type: REMOVELINE,
    PadIndex
});

export default {
    INCREASECOUNT,INITIALIZECOUNT,REVERSESTATUS,ADDLINE,REMOVELINE,
    increasecount,initializecount,reversestatus,addline,removeline
}