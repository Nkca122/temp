import { Link } from "react-router-dom"

export default function Yes() {
    const style = {
        position: "absolute",
        left: "20%",
        top: "60%"
    }
    return (
        <Link to="/YES">
            <button style={style}>
                YES
            </button>
        </Link>
    )
}