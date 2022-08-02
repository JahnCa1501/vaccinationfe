import { axiosPrivate } from './axios';

const getPassword = (email) => {
  return axiosPrivate.post(
    '/auth/recuperar',
    {
      email,
    }
  )
};

export default getPassword;