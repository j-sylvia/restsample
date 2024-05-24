import React, {useEffect,useState} from 'react';
import axios from 'axios';

function Loadapi(){
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);

    useEffect(()=>{
        axios.get("http://localhost:3004/users")
        .then(res=>{setData(res.data)})
        .catch(error=>{
            setError(error);
        });
    },[]);

    if (error){
        return <div>Error: {error.message}</div>;
    }
    if (!data){
        return <div>Loading...</div>;
    }

    //Render the fetched data
    return (
        <div>
            <h1>Data from API</h1>
            <table>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                </tr>
                {data.map(dt=>(
                    <tr key={dt.id}>
                        <td>{dt.firstname}</td>
                        <td>{dt.lastname}</td>
                        <td>{dt.age}</td>
                        <td>{dt.email}</td>
                        <td>{dt.dob}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
export default Loadapi;
