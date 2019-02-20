import React from 'react';
import './PadList.scss';
import color from '../../Color';
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
            props.ReverseStatus(props.PadIndex,statusIndex, PadStatus);
        }
    }

    function handleMouseUp(ev) {
        window.ISMOUSEDOWN = false;
    }
    

    function preventDrag(ev) {
        ev.preventDefault();
    }
    const padColor = props.CHORD.charCodeAt(0) % 65;
    
    const CurPad = props.PadData.map((item,index)=>{
        let selected = index === props.curCount ? 'selected' : '';
        let itemSelected = index === props.curCount ? 'trans' : '';
        
            if(item){
                return <li key={index} className={`${color[padColor]} ${itemSelected}`} onDragStart={preventDrag} onMouseEnter={handleMouseMove(index,item)} onMouseDown={handleMouseDown(index,item)} onMouseUp={handleMouseUp}></li>;
            } else {
                return <li key={index} className={`defaultColor ${selected}`} onDragStart={preventDrag} onMouseEnter={handleMouseMove(index,item)} onMouseDown={handleMouseDown(index,item)} onMouseUp={handleMouseUp}></li>;
            }
    });
    return (
        <ul className="PadParent">
            {CurPad}
        </ul>
    );
};

export default PadList;