import { useState } from "react"
import { TrafficLight } from "./traffic-light/TrafficLight";

import "./config.scss"
import { countDownTraffic } from './helpers/countDownTraffic';

export type TStatusApp = "Init Timer" | "Click Now" | "Countdown Active";
export const App = () => {

    const [statusApp, setStatusApp] = useState<TStatusApp>("Init Timer");
    const [stateCountdown, setStateCountdown] = useState(0);
    const [time, setTime] = useState(0);

    const onClick =  () => {
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

    return (
        <div className="App">
            <TrafficLight stateCountdown={stateCountdown}/>
            {/* <h1>{statusApp}</h1> */}
            {/* <h2>timer {stateCountdown}</h2> */}
            {/* <h3>time {time}</h3> */}
            <button onClick={onClick}>Click here</button>
        </div>
    )
}