export const TimeDisplay = (time: number) => {

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time % 1) * 100);
    
    return `${minutes}:${seconds}:${milliseconds}`;
}