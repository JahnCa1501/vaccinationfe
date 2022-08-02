import VacunasUX from "./VacunasUX";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getAppointment from "../../Services/api/vaccineapi";


const Appointment = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ 
    fecha: '',
    id:'',
    vacuna: '' });
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
        formValues.vacuna
      );
      Navigator('/vacunas');
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
    <VacunasUX
      fechaValue={formValues.fecha}
      idValue = {formValues.id}
      vacunaValue = {formValues.vacuna}
      onAppointmentClick={onAppointmentClick}
      onMenuClick={onMenuClick}
      onChangeHandler={onChangeHandler}
    />
  );
}
export default Appointment;