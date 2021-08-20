import { Link } from "react-router-dom"
import Button from "../shared/Button"
import Search from "./Search"
import useModal from "../customHooks/useModal"
import ModalWindow from "../shared/modalWindow/ModalWindow"
import ModalButton from "../shared/modalWindow/ModalButton"
import LoginPage from "../auth/LoginPage/LoginPage"
import LinkButton from "../shared/LinkButton"
import { ReactComponent as LogoIcon } from "../../assets/letra.svg"
import client from "../../api/client"
import { AuthContextConsumer } from "../auth/context"
import { Fragment } from "react"
import LogoutPage from "../auth/LogoutPage/LogoutPage"

const Header = ({ isLogged }) => {
    const a = () => { console.log(client.defaults.headers) };

    return (
        <nav className="navbar is-fixed-top  ">
            <div className="navbar-brand " >
                <div className="navbar-item">
                    <LogoIcon width="30" height="30" onClick={console.log('holaaaaaaaaaaaaaaaaaaaaaa')} ></LogoIcon>
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
                            <LinkButton link={'/ads/new'}>Subir producto</LinkButton>
                            {isLogged ? (

                                <ModalButton component={<LogoutPage />}>Cerrar sesión</ModalButton>
                            ) : (
                                <Fragment>
                                    <LinkButton link={'/auth/login'}>Inicia sesión</LinkButton>
                                    <LinkButton link={'/auth/register'}>Regístrate</LinkButton>
                                </Fragment>
                            )}

                            <LinkButton link={'/user'}>Mi zona</LinkButton>
                            <Button onClick={a} ></Button>
                        </div>
                    </div>
                </div>
            </div>

        </nav >

    )
}

const ConnectedHeader = props => {
    return (
        <AuthContextConsumer>
            {value => <Header {...value} {...props} />}
        </AuthContextConsumer>
    );
};

export default ConnectedHeader;