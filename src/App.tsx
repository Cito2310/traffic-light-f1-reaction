import { useState } from "react"
import { TrafficLight } from "./traffic-light/TrafficLight";

import "./config.scss"
import { countDownTraffic } from './helpers/countDownTraffic';
import { TapScreen } from "./tap-screen/TapScreen";
import { onTap } from './helpers/onTap';
import { SectionFooter } from "./section-footer/SectionFooter";

export type TStatusApp = "Init Timer" | "Click Now" | "Countdown Active";
export const App = () => {

    const [statusApp, setStatusApp] = useState<TStatusApp>("Init Timer");
    const [stateCountdown, setStateCountdown] = useState(0);
    const [time, setTime] = useState(0);

    const onClick =  () => onTap(statusApp, setStatusApp, setStateCountdown, setTime, time)
    

    return (
        <div className="App">
            <TrafficLight stateCountdown={stateCountdown}/>
            {/* <h1>{statusApp}</h1> */}
            {/* <h2>timer {stateCountdown}</h2> */}
            <SectionFooter/>
            {/* <h3>time {time}</h3> */}
            <TapScreen onClick={onClick}/>
            {/* <button onClick={onClick}>Click here</button> */}
        </div>
    )
}