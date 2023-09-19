// src/components/StartEngine.jsx

import "./StartEngine.css";
import React, { useContext } from "react";
import { BoatContext } from "../Context/globalContext";

// Define the StartEngine component.
export default function StartEngine() {
  // Access the state and dispatch function from the global context.
  const { state, dispatch } = useContext(BoatContext);

  // Function to handle the "Start Engine" button click.
  const handleEngineToggle = () => {
    dispatch({ type: "toggleEngine" });
  };

  // Determine the CSS class for displaying the engine status.
  const engineStatusClass = state.engineStatus === 'ON' ? 'EngineON' : 'EngineOFF';

  // Render the StartEngine component.
  return (
    <div className="StartEngine">
      {/* Display the engine status with appropriate CSS class */}
      <h2 className={`StartEngineH2 ${engineStatusClass}`}>
        Engine {state.engineStatus}
      </h2>

      {/* Button to toggle the  */}
      <button className=" button" onClick={handleEngineToggle}>
        Start Engine
      </button>
    </div>
  );
}
