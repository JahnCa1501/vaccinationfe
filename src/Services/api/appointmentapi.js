import { axiosPublic } from './axios';

const getAppointment = (fecha, id, establecimiento) => {
  return axiosPublic.post(
    '/citas/new',
    {
      fecha,
      id,
      establecimiento
    }
  )
};

export default getAppointment;