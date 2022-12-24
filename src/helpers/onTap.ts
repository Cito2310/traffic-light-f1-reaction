import { TStatusApp } from '../interface/TStatusApp';
import { ITime } from '../interface/ITime';

import { countDownTraffic } from './countDownTraffic';

export const onTap = (
    statusApp: TStatusApp,
    setStatusApp: React.Dispatch<React.SetStateAction<TStatusApp>>,
    setStateCountdown: React.Dispatch<React.SetStateAction<number>>,
    setTime: React.Dispatch<React.SetStateAction<ITime>>,
    time: ITime,
) => {
    switch (statusApp) {
        case "Init Timer":
            countDownTraffic( setStatusApp, setStateCountdown, setTime );
            break;

        case "Countdown Active":
            
            break;

        case "Click Now":
            setTime({
                currentTime: new Date().getTime() - time.firstTime,
                firstTime: 0
            });
            setStatusApp("Init Timer");
            break;
    }
}