import { axiosPrivate } from "../../Services/api/axios";
import React from "react";
const baseURL = "/carnet/all";
var data = [];


export default function App(props) {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axiosPrivate.get(baseURL).then((response) => {
      setPost(response.data);
      data = response.data;
    });
  }, []);

console.log(data);
  //create a new array by filtering the original array
  const filteredData = data.filter((el) => {
      //if no input the return the original
      if (props.input === '') {
          return el;
      }
      //return the item which contains the user input
      else {
          return el.nombre.toLowerCase().includes(props.input)
      }
  })
  return (
      <ul>
          {filteredData.map((item) => (
              <li key={item.identidad}>Nombre: {item.nombre} Identidad: {item.identidad} Fecha de nacimiento: {item.fechanacimiento} Direccion: {item.direccion} Telefono: {item.numero}</li>
          ))}
      </ul>
  )
}
