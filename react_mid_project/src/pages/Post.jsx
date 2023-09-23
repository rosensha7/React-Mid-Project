import { useState, useEffect } from "react";

const Post = (props) => {
    const [post, setPost] = useState({title: '', body: ''});

    useEffect(() => {
        setPost(props.post);
      }, [props.post]);

    return (
        <div style={{border: '2px solid black' , marginBottom: '10px', marginTop: '10px',  fontSize: '12px', height: '100px', margin: '10px', padding: '20px'}}>
            <span style={{float: 'left'}}>Title: </span> 
                {post.title.substring(0, 30)}
            <br/><br/>
            <span style={{float: 'left'}}>Body: </span>
                {post.body.substring(0, 30)}
        </div>  
    )
}

export default Post;
