import { useState } from "react";

const AddPost = (props) => {
    const [post, setPost] = useState({title:'', body:''});

    const addPost = () => {
        props.addPost(post);
        disableAdd();
    }

    const disableAdd = () => {
        props.setEnableAdd(false);
    }

    return (
        <div style={{border: '2px solid black', marginBottom: '10px', marginTop: '10px',  fontSize: '12px', height: '80px', paddingTop: '20px'}}>
            <span>Title: </span>
            <input type='text' onInput={(e) => setPost({...post, title: e.target.value})}/> <br/>
            <span>Body: </span>
            <input type='text' onInput={(e) => setPost({...post, body: e.target.value})}/> <br/>
            <button onClick={disableAdd} >Cancel</button>
            <button onClick={addPost}>Add</button>
        </div>  
    )

}

export default AddPost;
