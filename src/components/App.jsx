import React from "react";
import { useState, useEffect } from "react";
import ToDoList from "./ToDoList";


function App(){

    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([]);
    useEffect(()=>{
        console.log(inputList)
    },[]);

    const change = (event) => {
        console.log(event.target.value)
        setInputList(event.target.value);
        // console(inputList)
    }


    const listOfItems = ()=>{
        setItems((oldItems)=>{
            return[...oldItems, inputList]
        })
        setInputList('');
    }

    const deleteItems = (id)=>{
        console.log("delete");
        setItems((oldItems)=>{
            return oldItems.filter((arr , index)=>{return index !==id })
        })
    }

    return(
        <>
        <h1>TO-DO List</h1>
        <div>
        <input type="text" value={inputList} placeholder="add items here" onChange={change}/>
        <button onClick={listOfItems}>+</button>

        <ol>
            {items.map(((itemval, index)=>{
                return(
                    <ToDoList value={itemval} key = {index} id={index} onSelect = {deleteItems}/>)
            }))}
        </ol>

        </div>
        </>
    )
}


export default App;