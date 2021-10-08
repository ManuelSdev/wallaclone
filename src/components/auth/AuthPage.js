import { Route, Switch, useHistory, useLocation } from "react-router-dom"
import LinkButton from "../shared/LinkButton"
import AuthWelcome from "./AuthWelcome"
import LoginPage from "./LoginPage/LoginPage"
import RegisterPage from "./RegisterPage/RegisterPage"
import React from "react"
import queryString from 'query-string'

const AuthPage = () => {
    const location = useLocation()
    const history = useHistory()
    const { redirectTo } = queryString.parse(location.search);
    const { from } = { from: redirectTo } || location.state || { from: { pathname: '/' } };
    console.log("REDI", { redirectTo })
    console.log("FROMMMMM", from)
    // console.log("FROMMMMM", queryString.parse(location.search))
    //console.log("ququuq", React.useRef(from))
    const refFrom = React.useRef(from)
    //console.log("AAAAAAA", refFrom.current)
    return (
        <div className="AuthPage">

            <Switch>
                {/**<Route path="/auth/login" component={LoginPage}></Route> */}
                {/**<Route path="/auth/login"><LoginPage from={from} /></Route> */}
                <Route exact path="/auth/login"><LoginPage from={refFrom.current} /></Route>

                <Route exact path="/auth/register" component={RegisterPage}></Route>
                <Route exact exact path="/auth" component={AuthWelcome}></Route>
            </Switch>

        </div>
    )


}

export default AuthPage