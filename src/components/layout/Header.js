import { Link, useLocation } from "react-router-dom"
import Button from "../shared/Button"
import Search from "./Search"
import useModal from "../customHooks/useModal"
import ModalWindow from "../shared/modalWindow/ModalWindow"
import ModalButton from "../shared/modalWindow/ModalButton"
import LoginPage from "../auth/LoginPage/LoginPage"
import LinkButton from "../shared/LinkButton"
import { ReactComponent as LogoIcon } from "../../assets/letra.svg"
import client from "../../api/client"
import { useAuthContext } from "../auth/context"
import { Fragment } from "react"
import LogoutPage from "../auth/LogoutPage/LogoutPage"
import Modal from "../shared/modalWindow/Modal"
import AuthPage from "../auth/AuthPage"
import React from "react"

const Header = () => {
    const a = () => { console.log(client.defaults.headers) };
    const { isLogged, handleLogout } = useAuthContext()
    const { modalClass, openModal, closeModal, handleCloseModal, handleOpenModal } = useModal()
    const location = useLocation()
    console.log("Estado de modalClasss en Header", modalClass)
    //console.log("LOCATION QUE PILLA EL HEADER", location.pathname)

    React.useEffect(() => {
        console.log("GESTIONA MODAL", modalClass)
        /**
            isLogged ?
            closeModal()
            :
            location.pathname.startsWith("/auth") && openModal()
         */
        location.pathname.startsWith("/auth") && openModal()
        isLogged && closeModal()

    }, [isLogged]);
    return (
        <Fragment>
            <nav className="navbar is-fixed-top  ">
                <div className="navbar-brand " >
                    <div className="navbar-item">
                        <Link to="/">
                            <LogoIcon width="30" height="30"  ></LogoIcon>
                        </Link>
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start is-expanded is-flex-grow-1	">
                        <div className="navbar-item is-expanded">
                            <Search></Search>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {isLogged ? (
                                    <Fragment>
                                        <LinkButton link={'/ads/new'}>Crear anuncio</LinkButton>
                                        <LinkButton link={'/user'}>Mi zona</LinkButton>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <LinkButton
                                            handleButton={handleOpenModal}
                                            link={"/ads/new"}
                                        >
                                            Crear anuncio
                                        </LinkButton>
                                        <LinkButton
                                            handleButton={handleOpenModal}
                                            link={"/auth"}
                                        >
                                            Regístrate o inicia sesion
                                        </LinkButton>
                                    </Fragment>
                                )}
                                <Button onClick={handleLogout} ></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
            <ModalWindow
                modalClass={modalClass}
                openModal={openModal}
                closeModal={handleCloseModal}
            >
                <AuthPage ></AuthPage>
            </ModalWindow>
        </Fragment >


    )
}


export default Header;