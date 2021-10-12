import React from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
import Button from "../shared/Button"
import SearchForm from "./SearchForm"
import FiltersForm from "./FiltersForm"
import LinkButton from "../shared/LinkButton"
import { ReactComponent as LogoIcon } from "../../assets/letra.svg"
import { Fragment } from "react"
import { useAuthContext } from "../auth/context"
import { useSearchContext } from "../context/SearchContext"


const Navbar = ({ handleOpenModal }) => {
    const { isLogged, handleLogout } = useAuthContext()
    const { onSearch } = useSearchContext()
    return (
        <div className="Navbar">
            <nav className="navbar  is-fixed-top  ">
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
                            {/*<Search onSubmit={handleSubmit(onSubmit)}></Search>*/}
                            <SearchForm></SearchForm>
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
            {onSearch &&
                <nav
                    style={{ backgroundColor: "red", marginTop: "3.5em" }}
                    className="navbar  is-fixed-top">
                    <div className="navbar-menu">
                        <FiltersForm></FiltersForm>
                    </div>
                </nav >
            }

        </div>
    )
}

export default Navbar
