import React from 'react';
import serialForm from 'form-serialize';
import { useDispatch } from 'react-redux';
import { addUserActionCreator } from '../actions/action';
import { DatePicker, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';


const CreateUser = (props) => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const values = serialForm(e.target, {hash: true});
        dispatch(addUserActionCreator(values))
        props.history.push('/');
      }
    
        return (
            <div>
                <h2>Create New User</h2>
                <form onSubmit={handleSubmit}>
                    <Input 
                    required
                    name='firstName'
                    className='input-field'
                    size='large' 
                    placeholder='Enter First Name'
                    />
                    <Input 
                    required
                    name='lastName'
                    className='input-field'
                    size='large' 
                    placeholder='Enter Last Name' 
                    />
                    <DatePicker 
                    required
                    name='birthDate'
                    className='input-field' 
                    size='large' 
                    placeholder='Enter Birth Date' 
                    />
                    <InputNumber 
                    required
                    name='age'
                    min={0} className='age input-field' 
                    size='large' placeholder='Enter Age' 
                    type='number' 
                    />
                    <Input 
                    required
                    name='hobby'
                    className='input-field' 
                    size='large' 
                    placeholder='Enter Hobby' 
                    />
                    <Button 
                    type='button' 
                    size='large'
                    htmlType='submit'
                    >
                        CREATE
                    </Button>
                </form>
            </div> 
        );
}

export default CreateUser;