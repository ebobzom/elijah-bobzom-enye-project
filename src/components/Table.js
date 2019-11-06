import React from 'react';
import { Link } from 'react-router-dom';

function UserTable(props){
    return (
        <div className='table-container'>
            <h2>Users</h2>
            <Link to='/create'>Add New User</Link> 
            {/* {JSON.stringify(props.users)} */}
        <table>
            <thead>
                <tr>
                <th> UserId </th>
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
                const {UserId, firstName, lastName, birthDate, age, hobby } = user;
                return (
                    <tr key={`${UserId}${lastName}${firstName}`}>
                        <td>{UserId}</td>
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