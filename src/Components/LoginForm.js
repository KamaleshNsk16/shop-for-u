// import { useContext } from "react";
// import { LoginContext } from "../RenderApp";
import SignupForm from "./SignupForm";
import "../ComponentsStyle/style.css";

export default function LoginForm(props) {
//   const loginMethod = useContext(LoginContext);
  let isUser = props.isUser;
  let content;
  if (isUser) {
    content = <h1>Welcome Sir your order is shipping</h1>;
  } else {
    content = <SignupForm />;
  }

  return <div>{content}</div>;
}