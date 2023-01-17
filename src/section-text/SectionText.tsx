import { useContext } from 'react';
import { contextApp } from '../provider/ProviderApp';
export const SectionText = () => {
    const { state } = useContext(contextApp);
    const { currentStatus, stopwatch } = state;

    return (
        <section id="section-text">
            <h2>{
                currentStatus === "init-timer"  ?  "Click to start"
                : currentStatus === "available-click" ? "-"
                : currentStatus === "available-reset" ? stopwatch+"ms"
                : currentStatus === "countdown-active" ? "Await"
                : currentStatus === "too-soon" ? "Too soon" : "Error client"
            }</h2>

            <h3>{
                currentStatus === "available-reset" 
                || currentStatus === "too-soon" 
                ?  "Click to reset"
                : null
            }</h3>
        </section>
    )
}