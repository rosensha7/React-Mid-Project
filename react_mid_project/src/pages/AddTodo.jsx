import { useState } from "react";

const AddTodo = (props) => {
    const [todo, setTodo] = useState({title: '', completed: false});

    const addTodo = () => {
        props.addTodo(todo);
        disableAdd();
    }

    const disableAdd = () => {
        props.setEnableAdd(false);
    }

    return (
        <div style={{border: '2px solid black', marginBottom: '10px', marginTop: '10px',  fontSize: '12px', height: '80px', paddingTop: '20px'}}>
            <span>Title: </span>
            <input type='text' onInput={(e) => setTodo({...todo, title: e.target.value})}/> <br/>
            <button onClick={disableAdd} >Cancel</button>
            <button onClick={addTodo}>Add</button>
        </div>  
    )

}

export default AddTodo;
