import { FormatTime } from "./FormatTime";

type CircuitsBoxProps = {
    arrayString: Array<string>;
    arrayNumber: Array<number>;
    time: number;
};

export const CircuitsBox = ({ arrayString, arrayNumber, time }: CircuitsBoxProps) => {
     
    const avrLapsTime = () => {
        const averageTime = arrayNumber.reduce((acc, curr) => acc + curr, 0) / arrayNumber.length;
        return averageTime ? <FormatTime time={averageTime} /> : '';
    };

    const sortedLaps = arrayString.sort();
    console.log(sortedLaps);


    return <div>
        <p>Time: {arrayNumber ? <FormatTime time={time} /> : ''}</p>
        <p>Average time: {avrLapsTime()}</p>
        <p>Fastest lap: {sortedLaps[0]}</p>
        <p>Slowest lap: {sortedLaps[sortedLaps.length - 1]}</p>
        <p>Laps number: {arrayString.length}</p>
    </div>
};
