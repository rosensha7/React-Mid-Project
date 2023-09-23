import { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './Users';
import Posts from './Posts';
import Todos from './Todos';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const Container = () => {
    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [chosenUser, setChosenUser] = useState({});

    useEffect(() => {
        getUsers();
        getTodos();
        getPosts();
      }, []);

      useEffect(() => {
        filterTodos(chosenUser).then(res => setFilteredTodos(res));
        filterPosts(chosenUser).then(res => setFilteredPosts(res));
      }, [chosenUser, todos, posts]);

    const getUsers = async () => {
        const { data } = await axios.get(`${USERS_URL}`);
        setUsers(data);
        setFilteredUsers(data);
    }

    const getTodos = async () => {
        const { data } = await axios.get(`${TODOS_URL}`);
        setTodos(data);
    }

    const getPosts = async () => {
        const { data } = await axios.get(`${POSTS_URL}`);
        setPosts(data);
    }

    const filterUsers = async (term) => {
        const filtered = await users.filter((user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term));
        await setFilteredUsers(filtered);
    }

    const filterTodos = async (user) => {
        if(!user){
            return {};
        }
        const filteredTodos = await todos.filter((todo) => todo.userId === user.id);
        return filteredTodos;
    }

    const filterPosts = async (user) => {
        if(!user){
            return {};
        }
        const filteredPosts = await posts.filter((post) => post.userId === user.id);
        return filteredPosts;
    }

    const updateTodoItem = async (updatedTodo) => {
        const updatedUserTodos = await todos.map(todo => {
            if(todo.title === updatedTodo.title) {
                return {...updatedTodo};
            }
            return todo;
        });
        
        setTodos(updatedUserTodos);
    }

    const addPostItem = async (newPost) => { 
        const updatedPosts = [...posts];
        await updatedPosts.push(newPost);
        await setPosts(updatedPosts)
    }

    const addTodoItem = async (newTodo) => {
        const updatedTodos = [...todos];
        await updatedTodos.push(newTodo);
        await setTodos(updatedTodos)
    }

    return (
        <div style={{ width: '600px'}}>
            <div style={{float:'left', width: '50%', border: '2px solid black', margin: '-2px', borderRadius: '25px', paddingBottom: '10px'}}>
                <label>Search: </label>
                <input type='text' onInput={(e)=>filterUsers(e.target.value)}></input>
                    <Users 
                    users={filteredUsers} 
                    chosenUser={chosenUser} 
                    setChosenUser={setChosenUser}/>
            </div>
            <div style={{float: 'right', width: '50%'}}>
                <div>
                    <Todos chosenUser={chosenUser} todos={filteredTodos} updateTodoItem={updateTodoItem} addTodoItem={addTodoItem}/>
                </div>
                <div>
                    <Posts chosenUser={chosenUser} posts={filteredPosts} addPostItem={addPostItem}/>
                </div>
            </div>
        </div>
    );
}

export default Container;
