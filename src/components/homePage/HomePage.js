import { Link } from "react-router-dom"
import Layout from "../layout/Layout"
import Button from "../shared/Button"
import SelectRange from "../shared/SelectRange"




const HomePage = () => {
    return (
        <Layout>
            <div className="HomePage">
                HOME PAGE
                <SelectRange></SelectRange>
            </div>
        </Layout>
    )
}

export default HomePage