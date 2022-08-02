import { axiosPublic } from './axios';

const getAppointment = (fecha, id, establecimiento) => {
  return axiosPublic.post(
    '/auth/appointment',
    {
      fecha,
      id,
      establecimiento
    }
  )
};

export default getAppointment;