import { Link } from "react-router-dom"
import Button from "../shared/Button"
//import AuthButton from "../auth/AuthButton/AuthButton"
//import Button from "../shared/Button"
import Search from "./Search"
import useModal from "../customHooks/useModal"
import ModalWindow from "../shared/modalWindow/ModalWindow"
import ModalButton from "../shared/modalWindow/ModalButton"
import LoginPage from "../auth/LoginPage/LoginPage"
import LinkButton from "../shared/LinkButton"
import AuthPage from "../auth/AuthPage/AuthPage"

const Header = () => {
    const { modalClass, openModal, closeModal } = useModal()
    const a = '/ads/new'
    //<Link to="/auth/login">  <ModalButton component={LoginPage}> <LoginPage /> </ModalButton></Link>

    return (
        <div className="Header">

            <Search></Search>
            <div className="buttons">
                <LinkButton link={'/ads/new'}>Subir producto</LinkButton>
                <ModalButton component={<AuthPage />}>Inicia sesión o regístrate</ModalButton>
                <LinkButton link={'/user'}>Mi zona</LinkButton>
            </div>

        </div >

    )
}

export default Header