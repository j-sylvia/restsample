import React, {useState} from 'react';
import axios from 'axios';

const API_URL = "http://localhost:3004/users";

export default function Postapi(){
    const [users,setUsers] = useState([]);
    const [newUser,setNewUser] = useState({firstname:'', lastname:'', age:'', email:'',dob:''});

    const createPost = async ()=>{
        try{
            const createdUser = await createUser(newUser);
            setUsers([...users,createdUser]);
            setNewUser({firstname:'',lastname:'',age:'',email:'', dob:''});
        }
        catch(error){
            console.error("Error creating user:", error);  
        }
    };

    async function createUser (userData){
        try{
            const response = await axios.post(API_URL, userData);
            return response.data;
        }
        catch(error){
            console.error("Error creating user:", error);
            return null;  
        }
    };

    //Render the fetched data
    return (
        <div>
            <input type="text" value={newUser.firstname} onChange={(e)=>setNewUser({...newUser, firstname:e.target.value})} placeholder='First Name'/>
            <br />
            <input type="text" value={newUser.lastname} onChange={(e)=>setNewUser({...newUser, lastname:e.target.value})} placeholder='Last Name'/>
            <br />
            <input type="number" value={newUser.age} onChange={(e)=>setNewUser({...newUser, age:e.target.value})} placeholder='Age'/>
            <br />
            <input type="email" value={newUser.email} onChange={(e)=>setNewUser({...newUser, email:e.target.value})} placeholder='Email'/>
            <br />
            <input type="date" value={newUser.dob} onChange={(e)=>setNewUser({...newUser, dob:e.target.value})} placeholder='DOB'/>
            <br />
            <button onClick={createPost}>Create User</button>
        </div>
    );
}
