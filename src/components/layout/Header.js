import { Link, useHistory, useLocation } from "react-router-dom"
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
import { Fragment, useContext } from "react"
import LogoutPage from "../auth/LogoutPage/LogoutPage"
import Modal from "../shared/modalWindow/Modal"
import AuthPage from "../auth/AuthPage"
import React from "react"
import usePromise from "../customHooks/usePromise"
import { getAds } from "../../api/ads"
import useForm from "../customHooks/useForm"
import FiltersBar from "./FiltersBar"
import FormField from "../shared/formFields/FormField"
import SelectTags from "../shared/formFields/SelectTags/SelectTags"

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

    const { handleChange, handleSubmit, validate, setFormValue, formValue: filters } = useForm({
        name: "",
        maxPrice: null,
        minPrice: 1,
        tags: [],

    });
    const { name, maxPrice, minPrice, price, tags, } = filters;
    return (
        <Fragment>

            <nav className="navbar is-fixed-top  ">
                <div className="navbar-brand " >
                    <div className="navbar-item">
                        <Link to="/">
                            <LogoIcon width="30" height="30"  ></LogoIcon>
                        </Link>
                        { /*<Button onClick={onSubmit}>ddddddddd</Button>*/}
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start is-expanded is-flex-grow-1	">
                        <form className="field has-addons is-flex-grow-1" onSubmit={'onSubmit'}>
                            <div className="navbar-item ">
                                <div>Precio mínimo</div>
                                <FormField
                                    type="number"
                                    name="minPrice"
                                    value={minPrice}

                                    //min="1"
                                    //step="10"
                                    onChange={handleChange}
                                >
                                </FormField>



                            </div>
                            <div className="navbar-item ">
                                <div>Precio máximo</div>
                                <FormField
                                    type="number"
                                    name="maxPrice"
                                    value={maxPrice}

                                    //min="1"
                                    //step="10"
                                    onChange={handleChange}
                                >
                                </FormField>
                            </div>
                            <div className="navbar-item ">
                                <SelectTags multiple name="tags" value={tags} onChange={handleChange} />
                            </div>
                            <div className="navbar-item is-expanded is-flex-grow-5">
                                <div className="control is-expanded">
                                    <FormField
                                        type="text"
                                        name="name"
                                        //placeholder="¿Qué vas a vender?"
                                        //onChange={even => console.log(even.target)}
                                        //handleChange cambia el estado a medida que se escribe
                                        onChange={handleChange}
                                        //value toma el valor que vamos teniendo en el estado
                                        value={"searchKeys"}
                                    >
                                    </FormField>
                                </div>
                                {<Button type="submit" >Buscar</Button>}
                            </div>
                        </form>
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