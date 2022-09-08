import React from "react";
import { useState } from "react";
import api from "../api"
import "bootstrap/dist/css/bootstrap.css"

const Users =()=>{
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers((users) => users.filter(user=> user !== userId));
    };

    const renderPhrase = (number) => {
        number = users.length;
        let phrase = <h1><span className="badge bg-primary">{users.length} человек тусанет с тобой сегодня</span></h1>;
        if (number===0) {
            phrase = <h1><span className="badge bg-danger">Никто с тобой не тусанет</span></h1>
        } 
        if (number==1)  {
            phrase = <h1><span className="badge bg-primary">{number} человек тусанет с тобой сегодня</span></h1>
        }
        if (number>=2 && number<=4)  {
            phrase = <h1><span className="badge bg-primary">{number} человека тусанут с тобой сегодня</span></h1>
        }
        return phrase;
    };

    const renderTable = () => {
        if (users.length===0) return "";
        return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
               <tr key={user._id}>
                <th scope="row" key={user.name}>{user.name}</th>
                <td>
                {user.qualities.map((qual) => (
                <span key={qual._id} className={['badge m-1 bg-'+qual.color]}>{qual.name}</span>
                ))}
                </td>
                <td key={user.profession}>{user.profession.name}</td>
                <td key={user.completedMeetings}>{user.completedMeetings}</td>
                <td key={user.rate}>{user.rate} / 5</td>
                <td><button type="button" className="btn btn-danger" onClick={()=>handleDelete(user)}>delete</button></td>
            </tr> 
            ))
            }
        </tbody>
        </table>
    )}

    return (
        <div>
        {renderPhrase()}
        {renderTable()}
        </div>
    );
}

export default Users;