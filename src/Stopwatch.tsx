import { useState, useEffect } from "react";
import { Button } from "./Button";
import { LapsCircuits } from "./LapsCircuits";
import { CircuitsBox } from "./CircuitsBox";
import { TotalTime } from "./TotalTime";
import { CurrentLapTime } from "./CurrentLapTime";
import { TimeDisplay } from "./TimeDisplay";

const lapsFormated: Array<string> = [];
const laps: Array<number> = []

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [currentLap, setCurrentLap] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [totalReset, setTotalRest] = useState(true);
  
  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTotalRest(false);
  };

  const handleReset = () => {
    setTime(0);
    setCurrentLap(0);
    laps.splice(0);
    lapsFormated.splice(0);
    !isRunning ? setTotalRest(true) : null;
  };
  
  const handleLap = () => {
    if (currentLap && isRunning) {
      lapsFormated.push(TimeDisplay(currentLap))
      laps.push(currentLap);
      setCurrentLap(0);
      lapsFormated.sort();
    }
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01),
          setCurrentLap(prevTime => prevTime + 0.01);
      }, 10);
      
      return () => clearInterval(interval);
    }
  }, [isRunning]);
  

  if (isRunning || totalReset) {

    return <div>
      <TotalTime time={time} />
      <CurrentLapTime time={currentLap} />
      <LapsCircuits array={lapsFormated} />
      <Button nameClass='btn-start'  name='Start' method={handleStart} />
      <Button nameClass='btn-stop' name='Stop' method={handleStop} />
      <Button nameClass='btn-reset' name='Reset' method={handleReset} />
      <Button nameClass='btn-lap' name='Lap' method={handleLap} />

    </div>
    } 
    return <div>
      <CircuitsBox arrayString={lapsFormated} arrayNumber={laps} time={time} />
      <Button nameClass='btn-start' name='Start' method={handleStart} />
      <Button nameClass='btn-stop' name='Stop' method={handleStop} />
      <Button nameClass='btn-reset' name='Reset' method={handleReset} />
      <Button nameClass='btn-lap' name='Lap' method={handleLap} />
    </div>
};
