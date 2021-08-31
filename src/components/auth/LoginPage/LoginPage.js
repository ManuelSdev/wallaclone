import React from 'react';
//import Button from "../../shared/Button"
import LoginForm from "./LoginForm"
import { useAuthContext } from '../context';
import { login } from '../../../api/user'
import usePromise from '../../customHooks/usePromise';
import './LoginForm.scss'
import { useHistory, useLocation } from 'react-router-dom';

/**
 * 
 * AuthContextProvider "emite" un objeto value={authValue} que captamos con AuthContextConsumer
 * Este tiene tres propiedades
 * Pasamos como parámetro solo las que usamos: onLogin
 * El paso de parámetros anterior es igual que cuando llegan por props que baja el padre
 * 
 */
const LoginPage = ({ from }) => {

    const { handleLogin, isLogged } = useAuthContext()
    //No usamos el estado data de usePromise ni le pasamos parametro de valor de estado inicial
    //porque no esperamos recibir datos con la petición de login
    const { loading, error, throwPromise, } = usePromise()
    const location = useLocation()
    const history = useHistory()

    //** const from = location.state ? location.state.from : {pathname: '/'}

    /*
        const handleSubmit = async credentials => {
            try {
                await throwPromise(login(credentials));
                handleLogin()
    
                await history.replace(from);
            } catch (error) {
                //setError(error);
                console.log(error)
                window.alert(error)
            } finally {
                //setIsLoading(false);
                //console.log("PROMESA LOGIN OK")
            }
        };
    */
    const handleSubmit = async credentials => {
        await throwPromise(login(credentials));
        console.log("PROMMMMMMMMMMMMMMMMMM")
        handleLogin()
        history.replace(from);
    };
    error && console.log(error.reason)
    return (
        <div className="LoginPage">
            <div className="container">
                <LoginForm error={error?.reason} onSubmit={handleSubmit}></LoginForm>
            </div>
        </div>
    )
}

export default LoginPage;