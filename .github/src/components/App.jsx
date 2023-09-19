// src/components/App.jsx

import ContainerContext from "../Context/containerContext";
import BoatConsole from "./BoatConsole";
import './App.css'

function App() {
  return (
    <ContainerContext >
  <BoatConsole/>
    </ContainerContext>
  );
}

export default App;
