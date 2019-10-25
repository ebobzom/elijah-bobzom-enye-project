import React from 'react';
import { Link } from 'react-router-dom';

function UserTable(props){
    return (
        <div className='table-container'>
            <h2>Users</h2>
            <Link to='/create'>Add New User</Link> 
        <table>
            <thead>
                <tr>
                <th> First Name </th>
                <th> Last Name </th>
                <th> Birth Date </th>
                <th> Age </th>
                <th> Hobby </th>
                </tr>
                
            </thead>
            <tbody>
            {
                props.users ? 
                props.users.map( user => {
                const {firstName, lastName, birthDate, age, hobby } = user;
                return (
                    <tr key={`${firstName}${lastName}${birthDate}${hobby}`}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{birthDate}</td>
                    <td>{age}</td>
                    <td>{hobby}</td>
                    </tr>
                )
                }) : null
            }
            </tbody>
        </table>
      </div>
    );
}


export default UserTable;