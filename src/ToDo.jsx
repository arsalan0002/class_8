import { computeHeadingLevel } from "@testing-library/react";
import React from "react";

const ToDoList =  (props) => {

    return ( 
    <>
    <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true"
        onClick={()=>{
            props.onSelect(props.id)
        }}/>
        <button onClick={()=>{
        }}>Edit</button>

    <li> {props.text} </li>
    </div>
    </>
    
    );

};

export default ToDoList;