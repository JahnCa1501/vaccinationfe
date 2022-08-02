import PasswordUx from "./PasswordUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getPassword from "../../Services/api/passwordapi";

const Password = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ 
    email: ''});
    
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }

  const onPasswordClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await getPassword(
        formValues.email
      );
      Navigator('/login');
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  }
  const onLoginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator("/login");
  }
  return (
    <PasswordUx
      emailValue={formValues.email}
      onSignInClick={onPasswordClick}
      onLoginClick={onLoginClick}
      onChangeHandler={onChangeHandler}
    />
  );
}
export default Password;
