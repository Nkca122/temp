import { Outlet } from "react-router-dom"
export default function Form() {
    const style = {
        container: {
            height: "80vh",
            width: "60vw",
            position: "absolute",
            left: "20vw",
            top: "10vh"
        },
        inner: {
            height: "80vh",
            width: "60vw",
            position: "relative",
            border: "1px solid black",
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
        }
    }
    return (
        <>
            <div className="containerlayout" style={style.container}>
                <div className="inner" style={style.inner}>
                    <Outlet />
                </div>
            </div>

          
        </>
    )
}