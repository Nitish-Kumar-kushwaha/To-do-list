import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function ToDoList(props){

    

    return(<>
        <div> 
        <i class="fa-solid fa-xmark"></i>
        <li onClick={()=>{
            props.onSelect(props.id)
        }}>{props.value}</li>
        </div>
        
    </>)
 }

 export default ToDoList;