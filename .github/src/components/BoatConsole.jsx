// src/components/BoatConsole.jsx

import StartEngine from './StartEngine';
import SpeedConsole from './SpeedConsole';
import './BoatConsole.css';

export default function BoatConsole() {
  return (
    <div className="boat-console-container">
      <StartEngine />
      <SpeedConsole />
    </div>
  );
}
