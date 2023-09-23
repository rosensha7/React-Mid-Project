import { useState, useEffect } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const Todos = (props) => {
    const [chosenUserTodos, setChosenUserTodos] = useState([]);
    const [chosenUser, setChosenUser] = useState([]);
    const [enableAdd, setEnableAdd] = useState(false);

    useEffect(() => {
        setChosenUser(props.chosenUser);
        setEnableAdd(false);
      }, [props.chosenUser]);

    useEffect(() => {
        setChosenUserTodos(props.todos);
      }, [props.todos]);

    const updateSingleTodo = ((updatedTodo)=>{
        const updatedTodos = chosenUserTodos.map(todo => {
            return todo.title === updatedTodo.title ? {...updatedTodo} : {...todo};
        });
        setChosenUserTodos([...updatedTodos]);
        props.updateTodoItem({...updatedTodo});
    });

    const addTodo = (todo)=>{
        const newTodo = {...todo, userId: chosenUser.id}
        props.addTodoItem(newTodo);
        setEnableAdd(false);
    }

    return (
        <div hidden={!chosenUser.id}>
        <h5>Todos - {chosenUser.name}</h5>
        <button onClick={() => setEnableAdd(true)} style={{fontSize:'10px', float: 'right'}} hidden={enableAdd}>Add</button>
        <br/>
                <div hidden={enableAdd}>
                    {chosenUserTodos.map((todo, index) => {
                    return <Todo key={index} todo={todo} updateSingleTodo={updateSingleTodo}></Todo>
                    })} 
                </div>
                <div hidden={!enableAdd || !chosenUser.id}>
                    {<AddTodo addTodo={addTodo} setEnableAdd={setEnableAdd}></AddTodo>} 
                </div>
        </div>
    )

}

export default Todos;
