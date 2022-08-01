import { axiosPublic } from './axios';

const getSignIn = (email, password, name, direccion, sexo, numero, id, date ) => {
  return axiosPublic.post(
    '/auth/signin',
    {
      email,
      password,
      name, 
      direccion, 
      sexo, 
      numero, 
      id, 
      date
    }
  )
};

export default getSignIn;