import { useState } from "react";
import "../ComponentsStyle/style.css";
export default function LoginForm(props){
    let isUser = props.isUser;
    console.log(isUser);    
    let content;
    if(isUser){
        content = <h1>Welcome Sir your order is shipping</h1>
    }else{
        content = <SignupForm onRegister={props.onRegister} />;
    }

    return <div>{content}</div>
}

export function ShowPassword(){

}

export function SignupForm(props){
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[pincode, setPincode] = useState('');
    const[state, setState] = useState('');
    const[country, setCountry] = useState('');
    const[city, setCity] = useState('');
    const[password, setPassword] = useState('');
    const[userName, setUserName] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        props.onRegister();
    }

    function handleFirstName(event){

    }

    function handleLastName(event){

    }

    function handlePincode(event){

    }

    function handleCity(event){

    }

    function handleState(event){

    }

    function handleCountry(event){

    }

    function handleUserName(event){

    }

    function handlePassword(event){

    }

    function handleConfirmPassword(event){

    }

    return <form onSubmit={handleSubmit}>
        <h1>SignUp</h1><br />
        
        <label htmlFor="First Name" className="signupFields" onChange={handleFirstName}>First name : </label>
        <input type="text" /><br />
        
        <label htmlFor="Last Name" className="signupFields" onChange={handleLastName} >Last name : </label>
        <input type="text" /><br />
        
        <label htmlFor="Country" className="signupFields" onChange={handleCountry}>Country : </label>
        <input type="text" /><br />
        
        <label htmlFor="State" className="signupFields" onChange={handleState}>State : </label>
        <input type="text" /><br />
        
        <label htmlFor="City" className="signupFields" onChange={handleCity}>City : </label>
        <input type="text" /><br />
        
        <label htmlFor="PinCode" className="signupFields" onChange={handlePincode}>PinCode : </label>
        <input type="number" /><br />
        
        <label htmlFor="UserName" className="signupFields" onChange={handleUserName}>UserName : </label>
        <input type="text" /><br />
        
        <label htmlFor="Password" className="signupFields" onChange={handlePassword}> Password : </label>
        <input type="password" /><br />

        <label htmlFor="Password" className="signupFields" onChange={handleConfirmPassword}> Confirm Password : </label>
        <input type="password" /><br />

        <button>SignUp</button>
    </form>
}