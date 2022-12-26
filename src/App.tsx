import "./config.scss";
import { useContext } from 'react';
import { contextApp } from "./provider/ProviderApp";

export const App = () => {
    const { countdown, state, dispatch } = useContext(contextApp)
    const { currentSecond, currentStatus, stopwatch } = state;

    const onInitTimer = () => {
        switch ( currentStatus ) {
            case "available-reset":
            case "init-timer":
            case "too-soon":
                countdown.start(
                    ()=>{ 
                        dispatch({type: "STATUS change available-click"});
                        dispatch({type: "CURRENT-SECOND change", payload: 0});
                    },
                    ()=>{ dispatch({type:"CURRENT-SECOND change", payload: 6-countdown.currentSecond}) },
                    ()=>{
                        dispatch({type:"STATUS change countdown-active"});
                        dispatch({type:"CURRENT-SECOND change", payload: 1});
                    },
                );
                break;

            case "available-click":
                countdown.reset();
                dispatch({type: "STATUS change available-reset"})
                dispatch({type: "STOPWATCH change millisecond", payload: new Date().getTime()});
                break;
                
            case "countdown-active":
                countdown.reset();
                dispatch({type: "CURRENT-SECOND change", payload: 0});
                dispatch({type:"STATUS change too-soon"});
                break;
        }
    }

    const onResetTimer = () => {
        countdown.reset();
    }

    return (
        <div className="App">
            <h1>{currentStatus}</h1>
            <h2>{currentSecond}</h2>
            <h3>{stopwatch}</h3>

            <button onClick={onInitTimer}>Iniciar timer</button>
        </div>
    )
}