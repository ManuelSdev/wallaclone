import { Link } from "react-router-dom"
//import AuthButton from "../auth/AuthButton/AuthButton"
//import Button from "../shared/Button"
import Search from "./Search"

const Header = () => {



    return (
        <div className="Header">

            <Search></Search>
            <Link to="/ads/new"> <button>Subir producto</button></Link>
            <Link to="/auth/login">  <button>Login</button></Link>
            <Link to="/auth/register">  <button>Registro</button></Link>
            <Link to="/user">  <button>Mi zona</button></Link>


        </div>

    )
}

export default Header