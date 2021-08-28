import { Link } from "react-router-dom"
import Button from "../shared/Button"


const HomePage = () => {
    const a = () => console.log("hahahahahahha")
    return (

        <div className="HomePage">
            HOME PAGE
            <Link to="/ads"><Button onClick={a}></Button></Link>
        </div>
    )
}

export default HomePage