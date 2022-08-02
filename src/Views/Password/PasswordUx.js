import Page from "../../Components/Page";
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";
import Logo from '../../Components/Images/Vacuna.png';

const PasswordUx = ({
  emailValue = "",
  onChangeHandler = () => { },
  onPasswordClick = () => { },
  onLoginClick = () => { }
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Recuperación de Contraseña"
    >
      <img src={Logo} alt="" />
      <form style={{ minWidth: "380px", maxWidth: "640px" }}>
        <h1 style={{ textAlign: "center" }}>Recupera tu Contraseña</h1>
        <Field
          name="email"
          labelText="Correo Electrónico"
          type="email"
          value={emailValue}
          onChange={onChangeHandler}
        />
        <div style={{ paddingLeft: "80px" }}>
          <Buttons>
            <button class="button button1" onClick={onPasswordClick}>Enviar Correo</button>
            <button class="button button2" onClick={onLoginClick}>Cancelar</button>
          </Buttons>
        </div>
      </form>
    </Page>
  );
}

export default PasswordUx;
