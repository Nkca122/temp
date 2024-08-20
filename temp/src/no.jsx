import { useEffect, useState } from "react"

export default function No(){
    let [pos, setPos] = useState({
        x: 75,
        y: 60
    });

    let style = {
        position: "absolute",
        top: pos.y + "%",
        left: pos.x + "%"
    }

    function changePos(){
        setPos(
            {
                x: Math.random() * 80,
                y: Math.random() * 80
            }
        )
    }

    return(
        <button style = {style} onMouseEnter={changePos} onTouchStart={changePos}>
            No
        </button>
    )
}