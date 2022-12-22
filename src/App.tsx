import { useState } from "react"

export const App = () => {
    // const [statusApp, setStatusApp] = useState<string | number>("Ready");
    type TStatusApp = "Init Timer" | "Click Now" | "Countdown Active";

    const [statusApp, setStatusApp] = useState<TStatusApp>("Init Timer");
    const [stateCountdown, setStateCountdown] = useState(0);
    const [time, setTime] = useState(0);

    const onClick =  () => {
        switch (statusApp) {
            case "Init Timer":
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
                        }, randomTimer)
                        return clearInterval( interval );
                    }
                }, 1000) 
                
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
            <h1>{statusApp}</h1>
            <h2>timer {stateCountdown}</h2>
            <h3>time {time}</h3>
            <button onClick={onClick}>Click here</button>
        </div>
    )
}