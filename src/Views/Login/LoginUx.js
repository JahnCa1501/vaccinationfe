import Page from "../../Components/Page";
import { Field } from '../../Components/InputField';
import Buttons from '../../Components/Buttons';
import ErrorField from "../../Components/ErrorField";
import Logo from '../../Components/Images/Vacuna.png';

const LoginInUx = ({
  emailValue = "",
  passwordValue = "",
  error = "",
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
      <form style={{ minWidth: "380px", maxWidth: "640px" }}>
        <h1 style={{textAlign: "center"}}>Iniciar sesión</h1>
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
          <button className="button button1" onClick={onLoginClick}>Iniciar Sesión</button>
        </Buttons>
        {error && <ErrorField>{error}</ErrorField>}
      </form>
    </Page>
  );
}

export default LoginInUx;
