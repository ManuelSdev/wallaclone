import { Route, Switch } from "react-router-dom"
import LoginPage from "../LoginPage/LoginPage"
import RegisterPage from "../RegisterPage/RegisterPage"
import LinkButton from "../../shared/LinkButton"

const AuthTypePage = () => {

    return (
        <div className="AuthTypePage">
            TODO LOGADO RRSS
            <div className="buttons">
                <LinkButton link={"/auth/login"}>Inicia sesión</LinkButton>
                <LinkButton link={"/auth/register"}>Regístrate</LinkButton>
            </div>

            condiciones
        </div>
    )
}

export default AuthTypePage