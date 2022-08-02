import { axiosPublic } from './axios';

const getPassword = (email) => {
  return axiosPublic.post(
    '/password',
    {
      email,
    }
  )
};

export default getPassword;