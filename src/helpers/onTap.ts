import { TStatusApp } from '../App';
import { countDownTraffic } from './countDownTraffic';

export const onTap = (
    statusApp: TStatusApp,
    setStatusApp: React.Dispatch<React.SetStateAction<TStatusApp>>,
    setStateCountdown: React.Dispatch<React.SetStateAction<number>>,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    time: number,
) => {
    switch (statusApp) {
        case "Init Timer":
            countDownTraffic( setStatusApp, setStateCountdown, setTime );
            break;

        case "Countdown Active":
            
            break;

        case "Click Now":
            setTime( new Date().getTime() - time );
            setStatusApp("Init Timer");
            break;
    }
}