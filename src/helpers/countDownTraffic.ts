import { TStatusApp } from '../App';

export const countDownTraffic = (
    setStatusApp: React.Dispatch<React.SetStateAction<TStatusApp>>,
    setStateCountdown: React.Dispatch<React.SetStateAction<number>>,
    setTime: React.Dispatch<React.SetStateAction<number>>,
) => {
    let currentTimer = 1;
    setStatusApp("Countdown Active");
    setStateCountdown(currentTimer);
    const interval = setInterval(() => {
        currentTimer++;
        setStateCountdown(currentTimer);

        if (currentTimer === 5) {
            const randomTimer = Math.round( Math.random() * (3000 - 200) + 200 );
            setTimeout(()=>{
                setStatusApp("Click Now");
                setTime(new Date().getTime());
                setStateCountdown(0)
            }, randomTimer)
            return clearInterval( interval );
        }
    }, 1000) 
}