const INCREASECOUNT = "INCREASECOUNT";
const INITIALIZECOUNT = "INITIALIZECOUNT";
const REVERSESTATUS = "REVERSESTATUS";
const ADDLINE = "ADDLINE";

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

export default {
    INCREASECOUNT,INITIALIZECOUNT,REVERSESTATUS,ADDLINE,
    increasecount,initializecount,reversestatus,addline
}