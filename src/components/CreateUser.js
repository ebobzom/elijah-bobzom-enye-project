import React from 'react';
import serialForm from 'form-serialize';
import { DatePicker, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';


class CreateUser extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serialForm(e.target, {hash: true});
        this.props.handelState(values);
        this.props.history.push('/');
      }
    
    render(){
        return (
            <div>
                <h2>Create New User</h2>
                <form onSubmit={this.handleSubmit}>
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
}

export default CreateUser;