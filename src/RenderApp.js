import React, { createContext, useState } from 'react';
import LoginForm from './Components/LoginForm';

export const LoginContext = createContext(null);
export default function RenderApp(){
    const[isUser, setIsUser] = useState(false);
    
    function handleLogin(){
        setIsUser(true);
    }

    function handleSignup(){
        setIsUser(false);
    }

    return (<LoginContext.Provider value = {handleLogin}>
    <button className='IntroButton' onClick={handleSignup}>Signup </button>
    <button className='IntroButton' onClick={handleLogin}>Login</button>
    <LoginForm isUser={isUser}/>
    </LoginContext.Provider>)
}