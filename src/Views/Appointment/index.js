import AppointmentUx from "./AppointmentUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getAppointment from "../../Services/api/signinapi";


const Appointment = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ 
    fecha: '',
    id:'',
    establecimiento: '' });
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }
  const onAppointmentClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await getAppointment(
        formValues.fecha,
        formValues.id,
        formValues.establecimiento
      );
      Navigator('/citas');
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  }
  const onMenuClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator("/menu");
  }
  return (
    <AppointmentUx
      passwordValue={formValues.password}
      fechaValue={formValues.fecha}
      idValue = {formValues.id}
      establecimientoValue = {formValues.establecimiento}
      onAppointmentClick={onAppointmentClick}
      onMenuClick={onMenuClick}
      onChangeHandler={onChangeHandler}
    />
  );
}
export default Appointment;
