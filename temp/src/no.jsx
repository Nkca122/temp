import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function No() {
    let [pos, setPos] = useState({
        x: null,
        y: null
    });

    let [style, setStyle] = useState(
        {
            position: "relative"
        }
    
    )

    function changePos() {
        setPos(
            {
                x: Math.random() * 80,
                y: Math.random() * 80
            }
        )

        setStyle({
            position: "absolute",
            top: pos.y + "%",
            left: pos.x + "%"
        })
    }

    return (
        <Link to="/">
            <button style={style} onMouseEnter={changePos} onClick={changePos}>
                No
            </button>
        </Link>
    )
}