import * as React from 'react';
import Page from '../../Components/Page';
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";
import Logo from '../../Components/Images/Vacuna.png';

const AppointmentUx = ({
  idValue = "",
  fechaValue = "",
  vacunaValue = "",
  onChangeHandler = () => { },
  onAppointmentClick = () => { },
  onMenuClick = () => { }
}) => {

  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Registro de Citas"
    >
      <img src={Logo} alt=""/>
      <form style={{ minWidth: "380px", maxWidth: "640px" }}>
        <h1 style={{ textAlign: "center" }}>Registre una Vacuna</h1>
        <Field
          name="id"
          labelText="Numero de identidad"
          type="text"
          value={idValue}
          onChange={onChangeHandler}
        />
        <Field
          name="fecha"
          labelText="Fecha"
          type="date"
          value={fechaValue}
          onChange={onChangeHandler}
        />
        <Field
          name="vacuna"
          labelText="Nombre de Vacuna"
          type="text"
          value={vacunaValue}
          onChange={onChangeHandler}
        />
        <div style={{paddingLeft: "80px"}}>
        <Buttons>
          <button class="button button1" onClick={onAppointmentClick}>Registrar Vacuna</button>
          <button class="button button2" onClick={onMenuClick}>Cancelar</button>
        </Buttons>
        </div>
      </form>
    </Page>
  );
}

export default AppointmentUx;