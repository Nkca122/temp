import Yes from "./yes"
import No from "./no"
export default function Index() {
    const style = {
        question: {
            width: "60%",
            margin: "auto",
        },
        container:{
            width: "60%",
            display:"flex",
            justifyContent:"space-around",
            marginTop:"20px"
        }
    }
    return (
        <>
            <div>
                <p className="question" style={style.question}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laborum totam ea mollitia, quibusdam nesciunt optio perspiciatis tenetur delectus vero iusto distinctio culpa deleniti ratione perferendis rerum blanditiis itaque. Sequi?</p>
            </div>

            <div className="container" style={style.container}>
                <Yes/>
                <No/>
            </div>
            
        </>
    )
}