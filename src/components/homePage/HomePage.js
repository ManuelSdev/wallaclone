import { Link } from "react-router-dom"
import Layout from "../layout/Layout"
import Button from "../shared/Button"

const HomePage = () => {
    const a = () => console.log("hahahahahahha")
    return (
        <Layout>
            <div className="HomePage">
                HOME PAGE
                <Link to="/ads"><Button onClick={a}></Button></Link>
            </div>
        </Layout>
    )
}

export default HomePage