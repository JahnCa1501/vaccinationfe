import SignInUx from "./SignInUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getSignIn from "../../Services/api/signinapi";

const SignIn = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ 
    email: '',
    password: '',
    nombre: '',
    direccion: '',
    sexo: '',
    numero: '',
    id: '',
    date: new Date() });
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }
  const onSignInClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await getSignIn(
        formValues.email,
        formValues.password,
        formValues.nombre,
        formValues.direccion,
        formValues.sexo,
        formValues.numero,
        formValues.id,
        formValues.date
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
    <SignInUx
      passwordValue={formValues.password}
      emailValue={formValues.email}
      nameValue = {formValues.nombre}
      numeroValue = {formValues.numero}
      direccionValue = {formValues.direccion}
      sexoValue = {formValues.sexo}
      idValue = {formValues.id}
      dateValue = {formValues.date}
      onSignInClick={onSignInClick}
      onLoginClick={onLoginClick}
      onChangeHandler={onChangeHandler}
    />
  );
}
export default SignIn;
