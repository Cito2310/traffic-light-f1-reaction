import { ITime } from '../interface/ITime';
import { TStatusApp } from '../interface/TStatusApp';

import "./section-text.scss"

interface props {
    statusApp: TStatusApp,
    time: ITime
}

export const SectionText = ({ statusApp, time }: props) => {
    return (
        <section id="section-text">
            <h2>
                {
                    statusApp === "Init Timer" && time.currentTime ? time.currentTime
                    : statusApp === "Init Timer" ? "Tap to start countdown"
                    : statusApp === "Countdown Active" ? "Await"
                    : statusApp === "Too Soon" ? "Too soon"
                    : statusApp === "Click Now" ? "-" : ""
                }
            </h2>
            <h3>Title</h3>
        </section>
    )
}