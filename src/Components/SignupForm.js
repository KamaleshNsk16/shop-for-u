import {React,useState,useContext} from 'react';
import { LoginContext } from '../RenderApp';


export default function SignupForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const loginMethod = useContext(LoginContext);
  
    function handleFirstName(event) {
        setFirstName(event.target.value);
    }
  
    function handleLastName(event) {
      setLastName(event.target.value);
    }
  
    function handlePincode(event) {
      setPincode(event.target.value);
    }
  
    function handleCity(event) {
      setCity(event.target.value);
    }
  
    function handleState(event) {
      setState(event.target.value);
    }
  
    function handleCountry(event) {
      setCountry(event.target.value);
    }
  
    function handleUserName(event) {
      setUserName(event.target.value);
    }
  
    function handlePassword(event) {
      setPassword(event.target.value);
    }
  
    function handleConfirmPassword(event) {
      setConfirmPassword(event.target.value);
    }

    function setUserDetails(event) {
        let userDetails = {
            firstName : firstName,
            lastName : lastName,
            userName : userName,
            city : city,
            state : state,
            country : country,
            pincode : pincode,
            password : password
            }
        console.log(userDetails);
    }
  
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserDetails();
          loginMethod();
        }}
      >
        <h1>SignUp</h1>
        <br />
  
        <label htmlFor="First Name" className="signupFields">
          First name :{" "}
        </label>
        <input type="text" onChange={handleFirstName} />
        <br />
  
        <label htmlFor="Last Name" className="signupFields">
          Last name :{" "}
        </label>
        <input type="text" onChange={handleLastName} />
        <br />
  
        <label htmlFor="Country" className="signupFields">
          Country :{" "}
        </label>
        <input type="text" onChange={handleCountry} />
        <br />
  
        <label htmlFor="State" className="signupFields">
          State :{" "}
        </label>
        <input type="text" onChange={handleState} />
        <br />
  
        <label htmlFor="City" className="signupFields">
          City :{" "}
        </label>
        <input type="text" onChange={handleCity} />
        <br />
  
        <label htmlFor="PinCode" className="signupFields">
          PinCode :{" "}
        </label>
        <input type="number" onChange={handlePincode} />
        <br />
  
        <label htmlFor="UserName" className="signupFields">
          UserName :{" "}
        </label>
        <input type="text" onChange={handleUserName} />
        <br />
  
        <label htmlFor="Password" className="signupFields">
          {" "}
          Password :{" "}
        </label>
        <input type="password" onChange={handlePassword} />
        <br />
  
        <label htmlFor="Password" className="signupFields">
          {" "}
          Confirm Password :{" "}
        </label>
        <input type="password" onChange={handleConfirmPassword} />
  
        <button disabled={password !== confirmPassword}>SignUp</button>
      </form>
    );
  }
  