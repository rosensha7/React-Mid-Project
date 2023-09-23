import { useEffect, useState } from 'react';

const User = (props) => {
    const [user, setUser] = useState({});
    const [isOtherDataVisible, setIsOtherDataVisible] = useState(false);

    const handle = (e) => {
        if(e.target.type !== 'text'){
            setIsOtherDataVisible(false);
        }
    }

    useEffect(() => {
        setUser(props.user)
      }, [props.user]); // [] - Dependency List


      //todo: switch to form
    const updateUserEmail = async (e) => {
        const updateUser = {...user};
        updateUser.email = e.target.value;
        await setUser(updateUser);
    }

    const updateUserName = async (e) => {
        const updateUser = {...user};
        updateUser.name = e.target.value;
        await setUser(updateUser);
    }

    const updateStreet = async (e) => {
        const updateUser = {...user};
        updateUser.address.street = e.target.value;
        await setUser(updateUser);
    }

    const updateCity = async (e) => {
        const updateUser = {...user};
        updateUser.address.city = e.target.value;
        await setUser(updateUser);
    }

    const updateZipCode = async (e) => {
        const updateUser = {...user};
        updateUser.address.zipcode = e.target.value;
        await setUser(updateUser);
    }

    const updateCallback = () => {
        props.updateSingleUser({...user});
    }

    const deleteCallback = () => {
        props.deleteSingleUser(user.id);
    }

    const toggleChosenUser = (e) => {
        if(e.target.tagName !== 'BUTTON'){
            props.chosenUser.id === user.id ? props.setChosenUser({}) : props.setChosenUser(user);
        }
    }

    const color = () => {
        if(props.chosenUser.id === user.id){
            return 'orange';
        } 
        return 'white'
    }

    return (
    <div style={{float: 'left', border: '2px solid black', backgroundColor: color(), margin: '10px 10px 0px 0px'}} onClick={(e)=>toggleChosenUser(e)}>
      ID: {user.id} <br/>
      Name: <input type='text' value= {user?.name} onInput={(e) => updateUserName(e)}/> <br/>
      Email: <input type='text' value={user?.email} onInput={(e) => updateUserEmail(e)}/> <br/>
      
      {isOtherDataVisible && <div onClick={(e) =>handle(e)}>
        Street: <input type='text' value= {user?.address?.street} onInput={(e) => updateStreet(e)}/> <br/>
        City: <input type='text' value= {user?.address?.city} onInput={(e) => updateCity(e)}/> <br/>
        Zip Code: <input type='text' value={user?.address?.zipcode} onInput={(e) => updatZipCode(e)}/> <br/>
      </div>}
      <div style={{fontSize: '12px'}}>
      <button onMouseEnter={() => setIsOtherDataVisible(true)} style={{height: '30px', width: '100px', float: 'left', backgroundColor: 'lightgrey', margin: '5px 0px 5px 5px'}}>Other Data</button>
      <button onClick={deleteCallback} style={{height: '30px', width: '70px', float: 'right', backgroundColor: 'beige', margin: '5px 0px 5px 5px'}}>Delete</button>
      <button onClick={updateCallback} style={{height: '30px', width: '70px', float: 'right', backgroundColor: 'beige', margin: '5px 0px 5px 5px'}}>Update</button>
      </div>
      
      <br/><br/><br/>
      </div>
    );
}

export default User;
