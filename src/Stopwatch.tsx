import { useState, useEffect } from "react";
import { LapsCircuits } from "./LapsCircuits";
import { CircuitsBox } from "./CircuitsBox";
import { TotalTime } from "./TotalTime";
import { CurrentLapTime } from "./CurrentLapTime";
import { Buttons } from "./Buttons";

const lapsFormated: Array<string> = [];
const laps: Array<number> = []

export const Stopwatch = () => {

  const [time, setTime] = useState(0);
  const [currentLap, setCurrentLap] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalReset, setTotalRest] = useState(true);


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
      <img src="src\assets\sprint.png" alt="sprinter gif" className={ isRunning? 'sprinter-blink': 'sprinter'} />
      <TotalTime time={time} />
      <CurrentLapTime time={currentLap} />
      <LapsCircuits array={lapsFormated} />
      <Buttons isRunning={ isRunning} setIsRunning={setIsRunning} setTotalRest={setTotalRest} setTime={setTime} setCurrentLap={setCurrentLap} laps={laps} lapsFormated={lapsFormated} currentLap={currentLap}/>

    </div>
    } 
    return <div>
      <CircuitsBox arrayString={lapsFormated} arrayNumber={laps} time={time} />
      <Buttons isRunning={ isRunning} setIsRunning={setIsRunning} setTotalRest={setTotalRest} setTime={setTime} setCurrentLap={setCurrentLap} laps={laps} lapsFormated={lapsFormated} currentLap={currentLap}/>
    </div>
};
