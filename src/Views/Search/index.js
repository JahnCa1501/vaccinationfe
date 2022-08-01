import { React } from "react";
import TextField from "@mui/material/TextField";
import "../../Components/Search/Search.css";
/*import List from "../../Components/List/List";*/
// List on Line 19

function App() {
  return (
    <div className="main">
      <h1>Busqueda de Carnet</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Ingrese el numero de identidad"
        />
      </div>

    </div>
  );
}

export default App;