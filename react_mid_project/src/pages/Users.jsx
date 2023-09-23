import { useState, useEffect } from 'react';
import User from './User';

const Users = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(props.users)

    }, [props.users]);
    

    const updateSingleUser = async (user) => {
        const userToUpdate = await users.findIndex(u => {
           return user.id === u.id
        });
        if(userToUpdate !== -1){
            const updatedUsers = [...users];
            await updatedUsers.splice(userToUpdate, 1, user);
            await setUsers(updatedUsers);
        }
    }

    const deleteSingleUser = async (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    }

    return (
    <div style={{padding: '0px 0px 10px 20px'}}>
      {users.map( (user, index) => {
        return <User 
                user={user} 
                key={index} 
                setUsers={setUsers} 
                updateSingleUser = {updateSingleUser}
                deleteSingleUser = {deleteSingleUser}
                chosenUser={props.chosenUser}
                setChosenUser={props.setChosenUser}
            />
      })}
    </div>
    );
}

export default Users;
