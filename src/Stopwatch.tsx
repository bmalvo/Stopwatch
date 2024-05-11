import { useState, useEffect } from "react";
import { Button } from "./Button";

const lapsFormated: Array<string> = [];
const laps: Array<number> = []

const lapsCircuits = () => {

  return (
    <ul>
      {lapsFormated.map((el, indexOf) => <li key={indexOf}>{indexOf + 1} - { el }</li>)}
    </ul>
  )
  
}

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
    lapsFormated.push(formatTime(currentLap))
    laps.push(currentLap);
    setCurrentLap(0);
    lapsFormated.sort();
    console.log(lapsFormated)
    console.log(laps)
  }

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
  
  const avrLapsTime = () => {
    const average = laps.reduce((acc, curr) => acc + curr, 0) / laps.length;
    return formatTime(average);
  }
  // Time Laps

  const timeLaps = () => {


    return <div>
      <p>Time: {laps? formatTime(time): ''}</p>
      <p>Average time: { avrLapsTime() }</p>
      <p>Fastest lap: { lapsFormated[0] }</p>
      <p>Slowest lap: { lapsFormated[lapsFormated.length-1] }</p>
      <p>Laps number: { lapsFormated.length }</p>
    </div>
  }

  return (<>
      <div>
        <p>{formatTime(time)}</p>
      <p>{formatTime(currentLap)}</p>
      <div>{lapsCircuits()}</div>
      <Button name='Start' method={handleStart} />
      <Button name='Stop' method={handleStop} />
      <Button name='Reset' method={handleReset} />
      <Button name='Lap' method={handleLap} />

      </div>
    <div>
      {timeLaps()}
      </div>
    </>
    )
  }
