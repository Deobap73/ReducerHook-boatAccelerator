// src/components/SpeedConsole.jsx
import "./SpeedConsole.css";
import React, { useContext } from "react";
import { BoatContext } from "../Context/globalContext";

export default function SpeedConsole() {
  const { state, dispatch } = useContext(BoatContext);

  const handleGearUp = () => {
    if (state.accelerate && state.count < 5) {
      let speedIncrement = 0;
      
      const interval = setInterval(() => {
        if (speedIncrement < 25) {
          dispatch({ type: "updateSpeed", value: 1 }); // Aumenta em 1 unidade a cada 100ms
          speedIncrement++;
        } else {
          clearInterval(interval); // Interrompe o intervalo quando atingir 25
        }
      }, 100); // 100 milissegundos de intervalo
      dispatch({ type: "gearUp" });
    }
  };
  
const handleGearDown = () => {
  if (state.accelerate && state.count > -2) {
    let speedDecrement = 0;
    
    const interval = setInterval(() => {
      if (speedDecrement > -25) {
        dispatch({ type: "updateSpeed", value: -1 }); // Decrementa em 1 unidade a cada 100ms
        speedDecrement--;
      } else {
        clearInterval(interval); // Interrompe o intervalo quando atingir -25
      }
    }, 100); // 100 milissegundos de intervalo
    dispatch({ type: "gearDown" });
  }
};

  const handleToggleAccelerate = () => {
    dispatch({ type: "toggleAccelerate" });
  };

  return (
    <>
      <div className="SpeedConsole">
        <div>
          <h2 className="SpeedConsoleH2">
            {state.count} <span>Speed</span>
          </h2>
          <h2 className="SpeedConsoleH2 speed">
            {state.speedCount} <span>Gear</span>
          </h2>
        </div>
        <div className="SpeedConsoleSpeed">
          <button
            className="GearUp"
            onClick={handleGearUp}
            disabled={!state.accelerate || state.count >= 5 || state.engineStatus === "OFF"}>
            Gear up
          </button>
          <button
            className="GearDown"
            onClick={handleGearDown}
            disabled={!state.accelerate || state.count <= -2 || state.engineStatus === "OFF"}>
            Gear down
          </button>
          <button
            className="Accelerate"
            onClick={handleToggleAccelerate}
            disabled={state.engineStatus === "OFF"}>
            Accelerate
          </button>
        </div>
      </div>
    </>
  );
}
