import { useState, useEffect } from "react";
import { Button } from "./Button";
import { LapsCircuits } from "./LapsCircuits";
import { CircuitsBox } from "./CircuitsBox";
import { TotalTime } from "./TotalTime";
import { CurrentLapTime } from "./CurrentLapTime";

const lapsFormated: Array<string> = [];
const laps: Array<number> = []

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [currentLap, setCurrentLap] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setCurrentLap(0);
    laps.splice(0);
    lapsFormated.splice(0);
  };
  
  const handleLap = () => {
    if (currentLap && isRunning) {
      lapsFormated.push(formatTime(currentLap))
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
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time % 1) * 100);
    
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  if (isRunning) {

    return <div>
      <TotalTime time={time} />
      <CurrentLapTime time={currentLap} />
      <LapsCircuits array={lapsFormated} />
      <Button name='Start' method={handleStart} />
      <Button name='Stop' method={handleStop} />
      <Button name='Reset' method={handleReset} />
      <Button name='Lap' method={handleLap} />

    </div>
    } 
    return <div>
      <CircuitsBox arrayString={lapsFormated} arrayNumber={laps} time={time} />
      <Button name='Start' method={handleStart} />
      <Button name='Stop' method={handleStop} />
      <Button name='Reset' method={handleReset} />
      <Button name='Lap' method={handleLap} />
    </div>
};
