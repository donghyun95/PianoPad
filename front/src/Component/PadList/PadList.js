import React from 'react';
import './PadList.scss';
const PadList = (props) => {
    
    
    function handleMouseMove(statusIndex,PadStatus) {
        return function (ev) {
            if(window.ISMOUSEDOWN) {
                props.ReverseStatus(props.PadIndex,statusIndex, PadStatus);
            }
        }
    }
    
    function handleMouseDown(statusIndex,PadStatus) {
        return function (ev) {
            window.ISMOUSEDOWN = true;
            console.log("MouseDown");
            props.ReverseStatus(props.PadIndex,statusIndex, PadStatus);
        }
    }

    function handleMouseUp(ev) {
        window.ISMOUSEDOWN = false;
    }
    

    function preventDrag(ev) {
        ev.preventDefault();
    }


    const CurPad = props.PadData.map((item,index)=>{
        if(index === props.curCount) {
            return <li key="Cur" className="CurOrder" onDragStart={preventDrag} onMouseEnter={handleMouseMove(index,item)} onMouseDown={handleMouseDown(index,item)} onMouseUp={handleMouseUp}></li>;
        } else {
            if(item){
                return <li key={index} className="selectColor" onDragStart={preventDrag} onMouseEnter={handleMouseMove(index,item)} onMouseDown={handleMouseDown(index,item)} onMouseUp={handleMouseUp}></li>;
            } else {
                return <li key={index} className="defaultColor" onDragStart={preventDrag} onMouseEnter={handleMouseMove(index,item)} onMouseDown={handleMouseDown(index,item)} onMouseUp={handleMouseUp}></li>;
            }
        }
    });
    return (
        <ul className="PadParent">
            {CurPad}
        </ul>
    );
};

export default PadList;