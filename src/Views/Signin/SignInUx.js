import Page from "../../Components/Page";
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";
import Logo from '../../Components/Images/Vacuna.png';
import LogoDesign from '../../Components/Logo';

const SignInUx = ({
  nameValue = "",
  emailValue = "",
  passwordValue = "",
  onChangeHandler = () => { },
  onSignInClick = () => { },
  onLoginClick = () => { }
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="App de Vacunación"
    >
      <img src={Logo}/>
      <form style={{ minWidth: "380px", maxWidth: "640px"}}>
      <h1 style={{textAlign: "center"}}>Crea tu cuenta</h1>
        <Field
          name="nombre"
          labelText="Nombre"
          type="text"
          value={nameValue}
          onChange={onChangeHandler}
        />
        <Field
          name="email"
          labelText="Correo Electrónico"
          type="email"
          value={emailValue}
          onChange={onChangeHandler}
        />
        <Field
          name="password"
          labelText="Contraseña"
          type="password"
          value={passwordValue}
          onChange={onChangeHandler}
        />
        <Buttons>
        <button class="button button1" onClick={onSignInClick}>Crear Cuenta</button>
        <button class="button button2" onClick={onLoginClick}>¿Ya tienes cuenta? Inicia sesión</button>
        </Buttons>
      </form>
    </Page>
  );
}

export default SignInUx;
