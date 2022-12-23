import "./tap-screen.scss"

interface props {
    onClick: () => void
}

export const TapScreen = ({ onClick }: props) => {
    return (
        <button id="tap-screen" onClick={onClick}>
            
        </button>
    )
}