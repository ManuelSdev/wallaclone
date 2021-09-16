import { useHistory, useLocation } from "react-router-dom"
import Button from "../shared/Button"
import SearchForm from "./SearchForm"
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
import usePromise from "../customHooks/usePromise"
import { getAds } from "../../api/ads"
import useForm from "../customHooks/useForm"
import FiltersBar from "./FiltersBar"
import Navbar from "./Navbar"
const Header = () => {
    const a = () => { console.log(client.defaults.headers) };
    const { isLogged, handleLogout } = useAuthContext()


    const { modalClass, openModal, closeModal, handleCloseModal, handleOpenModal } = useModal()
    const location = useLocation()
    const history = useHistory()
    //console.log("Estado de modalClasss en Header", modalClass)
    //console.log("LOCATION QUE PILLA EL HEADER", location.pathname)

    React.useEffect(() => {
        // console.log("GESTIONA MODAL", modalClass)
        location.pathname.startsWith("/auth") && openModal()
        isLogged && closeModal()
    }, [isLogged]);


    /*
        const onSubmit = async () => {
            await throwPromise(getAds())
            //handleFiltersAreOn()
            console.log("FILTERS ON?", areFiltersOn)
            history.push("/ads")
            console.log("adios")
        }
        */

    return (
        <Fragment>
            <Navbar handleOpenModal={handleOpenModal}>    </Navbar>

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