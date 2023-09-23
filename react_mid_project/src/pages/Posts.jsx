import { useState, useEffect } from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const Posts = (props) => {
    const [chosenUserPosts, setChosenUserPosts] = useState([]);
    const [chosenUser, setChosenUser] = useState([]);
    const [enableAdd, setEnableAdd] = useState(false);

    useEffect(() => {
        setChosenUser(props.chosenUser);
        setEnableAdd(false);
      }, [props.chosenUser]);

    useEffect(() => {
        setChosenUserPosts(props.posts);
      }, [props.posts]);

    const addPost = (post)=>{
        const newPost = {...post, userId: chosenUser.id}
        props.addPostItem(newPost);
        setEnableAdd(false);
    }

    return (
        <div hidden={!chosenUser.id}>
        <h5>Posts - {chosenUser.name}</h5>
        <button onClick={() => setEnableAdd(true)} style={{fontSize:'10px', float: 'right'}} hidden={enableAdd}>Add</button>
        <br/>
                <div hidden={enableAdd}>
                    {chosenUserPosts.map((post, index) => {
                        return <Post key={index} post={post}></Post>
                    })} 
                </div>

                <div hidden={!enableAdd || !chosenUser.id}>
                    {<AddPost addPost={addPost} setEnableAdd={setEnableAdd}></AddPost>} 
                </div>
        </div>
    )

}

export default Posts;
