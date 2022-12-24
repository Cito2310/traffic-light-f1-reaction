import { useState } from "react"

import { onTap } from './helpers/onTap';
import { SectionTrafficLight } from "./section-traffic-light/SectionTrafficLight";
import { SectionFooter } from "./section-footer/SectionFooter";
import { SectionText } from "./section-text/SectionText";
import { TapScreen } from "./tap-screen/TapScreen";

import { TStatusApp } from './interface/TStatusApp';
import { ITime } from './interface/ITime';

import "./config.scss";

export const App = () => {

    const [statusApp, setStatusApp] = useState<TStatusApp>("Init Timer");
    const [stateCountdown, setStateCountdown] = useState(0);
    const [time, setTime] = useState<ITime>({} as ITime);

    const onClick =  () => onTap(statusApp, setStatusApp, setStateCountdown, setTime, time)
    

    return (
        <div className="App">
            <SectionTrafficLight stateCountdown={stateCountdown}/>
            <SectionText statusApp={statusApp} time={time}/>
            <SectionFooter/>
            <TapScreen onClick={onClick}/>
        </div>
    )
}