import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function Users(props) {
    const [users, setUsers] = useState([]);

    useEffect(()=>{ 

        async function getUsers(){
            const result = await axios('https://jsonplaceholder.typicode.com/users')
             // This is the object that comes back from the server.
            setUsers(result.data)

        }

        getUsers();
    })

    return (
        <div>
            <ul>
                {users.map(user=>(
                    <li key ={user.id}> {user.name} </li>
                ))}
            </ul>
            
        </div>
    );
}

export default Users;