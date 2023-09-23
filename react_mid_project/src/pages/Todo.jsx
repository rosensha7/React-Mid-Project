import { useEffect, useState } from "react";

const Todo = (props) => {
    const [todo, setTodo] = useState({title: '', completed: false});

    useEffect(() => {
        setTodo(props.todo);
      }, [props.todo]);


      const markCompleted =  () => {
        setTodo({...todo, completed: true});
        props.updateSingleTodo({...props.todo, completed: true});
      }

      const borderColor = ()=>{
        return todo.completed ? '2px solid blue' : '2px solid red';
      }

    return (
        <div style={{border: borderColor() , marginBottom: '10px', marginTop: '10px',  fontSize: '12px', height: '100px', margin: '10px', paddingTop: '20px'}}>
            <span style={{margin:'10px'}}>Title: </span> 
                {todo.title}
            <br/><br/>
            <span style={{margin:'10px'}}>Completed: </span>
                {todo.completed+''}
            <button onClick={markCompleted} hidden={todo.completed} style={{width: '130px'}}>Complete</button>
        </div>  
    )

}

export default Todo;
