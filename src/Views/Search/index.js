import ButtonsReturn from '../../Components/ButtonsReturn';
import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./App";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <ButtonsReturn></ButtonsReturn>
      <h1>Buscar Carnet</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <div class="cards">
      <div className="card">
      <div className="contenido-texto-card">
      <List input={inputText} />
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;