interface props {
    stateCountdown: number,
    lightNumber: number,
}

export const TrafficLightColumn = ({ stateCountdown, lightNumber }: props) => (
    <div className="traffic-light-column">
        <i className="fa-solid fa-circle circle-light green-light-off" />
        <i className="fa-solid fa-circle circle-light yellow-light-off" />
        {
            stateCountdown >= lightNumber
            ?   <>
                <i className="fa-solid fa-circle circle-light red-light" />
                <i className="fa-solid fa-circle circle-light red-light" />
            </> : <>
                <i className="fa-solid fa-circle circle-light red-light-off" />
                <i className="fa-solid fa-circle circle-light red-light-off" />
            </>
        }
    </div>
)