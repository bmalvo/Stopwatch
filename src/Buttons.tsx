import { Button } from "./Button"
import { TimeDisplay } from "./TimeDisplay";

type ButtonsProps = {

    isRunning: boolean;
    setIsRunning: (prop: boolean) => void;
    setTotalRest: (prop: boolean) => void;
    setTime: (prop: number) => void;
    setCurrentLap: (prop: number) => void; 
    laps: Array<number>;
    lapsFormated: Array<string>;
    currentLap: number;
} 

export const Buttons = ({isRunning, setIsRunning, setTotalRest, setTime, setCurrentLap, laps, lapsFormated, currentLap} : ButtonsProps) => {

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
          lapsFormated;
        }
    };
    
    
    return <>
    <Button nameClass='btn-start'  name='Start' method={handleStart} />
    <Button nameClass='btn-stop' name='Stop' method={handleStop} />
    <Button nameClass='btn-reset' name='Reset' method={handleReset} />
    <Button nameClass='btn-lap' name='Lap' method={handleLap} />
    </>
}