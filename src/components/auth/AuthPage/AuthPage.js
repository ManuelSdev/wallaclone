import { Route, Switch } from "react-router-dom"
import LinkButton from "../../shared/LinkButton"
import LoginPage from "../LoginPage/LoginPage"
import RegisterPage from "../RegisterPage/RegisterPage"
import AuthTypePage from "./AuthTypePage"

const AuthPage = () => {

    return (
        <div className="AuthPage ">
            <div className="level-right">
                <button className="delete level-item" aria-label="close"></button>
            </div>

            <Switch>
                <Route path="/auth/login" component={LoginPage}></Route>
                <Route path="/auth/register" component={RegisterPage}></Route>
                <Route component={AuthTypePage}></Route>
            </Switch>
        </div>
    )
}

export default AuthPage