import "./traffic-light.scss"

import { TrafficLightColumn } from './TrafficLightColumn';

interface props {
    stateCountdown: number
}

export const TrafficLight = ({ stateCountdown }: props) => {
    return (
        <section id="scetion-traffic-light">
            <div id="traffic-light-container">
                <TrafficLightColumn stateCountdown={stateCountdown} lightNumber={1} />
                <TrafficLightColumn stateCountdown={stateCountdown} lightNumber={2} />
                <TrafficLightColumn stateCountdown={stateCountdown} lightNumber={3} />
                <TrafficLightColumn stateCountdown={stateCountdown} lightNumber={4} />
                <TrafficLightColumn stateCountdown={stateCountdown} lightNumber={5} />
            </div>  
        </section>
    )
}