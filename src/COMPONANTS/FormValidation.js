import React, { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom'

export default function FormValidation() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
   
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    const handleNmae = (e) => {
        let name = e.target.value;
        setName(name);
        if (name.trim().length < 3) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    const handlePassword = (e) => {
        let password = e.target.value;
        setPassword(password);
        if (password.length !== 6) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            password: password
        };

        console.log("Form data:", userData);
        localStorage.setItem('userData', JSON.stringify(userData));

        console.log('Stored in localStorage:', userData); 
        if (!nameError && !passwordError) {
            // alert('Form submitted successfully!');
            
            localStorage.setItem('userData', JSON.stringify(userData));

            console.log('Stored in localStorage:', userData); 

            navigate("/home");
        } else {
            alert('Please correct the errors before submitting.');
        }
        navigate('./Home')
    };
  

    return (
        <>
            <div className='Form-page'>
                <div className='container'>
                    <h1 id='heading'>Login Form</h1>
                    <form onSubmit={handleSubmit}>
                        <label>UserName </label>
                        <input id='input' type='text' name='name' value={name} onChange={handleNmae} placeholder=' Enter your name' required/>
                        <br/>
                        {nameError? <span style={{color:'red'}}>Name length must be greater than 2 chrachters</span> :''}
                        <br/><br/>
                        <label>Password </label>
                        <input id='input' type='text' name='password'value={password} onChange={handlePassword} placeholder='  Enter Password' required/>
                        <br/>
                        {passwordError?<span style={{color:'red'}}>Password must be 6 chrachters</span>:''}
                        <br/><br/>
                        <button className='login-btn' type='submit' >Submit</button>
                    </form>
                </div>
            </div>    
        
        </>
    );
}
