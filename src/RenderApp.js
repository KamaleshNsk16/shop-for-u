import React, { useState } from 'react';
import LoginForm from './Components/LoginForm';

export default function RenderApp(){
    const[isUser, setIsUser] = useState(false);
    function handleLogin(){
        setIsUser(true);
    }

    function handleSignup(){
        setIsUser(false);
    }

    return (<>
    <button className='IntroButton' onClick={handleSignup}>Signup </button>
    <button className='IntroButton' onClick={handleLogin}>Login</button>
    <LoginForm isUser={isUser} onRegister={handleLogin}/>
    </>)
}