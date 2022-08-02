import { axiosPublic } from './axios';

const getVaccine = (fecha, id, vacuna) => {
  return axiosPublic.post(
    '/vacunas/new',
    {
      fecha,
      id,
      vacuna
    }
  )
};

export default getVaccine;