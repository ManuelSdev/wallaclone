import React from 'react';
//import Button from "../../shared/Button"
import LoginForm from "./LoginForm"
import { useAuthContext } from '../context';
import { login } from '../../../api/user'
import usePromise from '../../customHooks/usePromise';
import './LoginForm.scss'

/**
 * 
 * AuthContextProvider "emite" un objeto value={authValue} que captamos con AuthContextConsumer
 * Este tiene tres propiedades
 * Pasamos como parámetro solo las que usamos: onLogin
 * El paso de parámetros anterior es igual que cuando llegan por props que baja el padre
 * 
 */
const LoginPage = ({ history, location }) => {

    const { handleLogin, isLogged } = useAuthContext()
    //No usamos el estado data de usePromise ni le pasamos parametro de valor de estado inicial
    //porque no esperamos recibir datos con la petición de login
    const { loading, error, throwPromise, } = usePromise()


    console.log(location)

    //** const from = location.state ? location.state.from : {pathname: '/'}


    //Este método bajará como prop onSubmit a <LoginForm>
    const handleSubmit = async credentials => {
        // login(credentials).then(handleLogin);
        //resetError();
        //setIsLoading(true);
        console.log("holi")
        try {
            await throwPromise(login(credentials));
            handleLogin()
            const { from } = { from: { pathname: '/' } };
            history.replace(from);

        } catch (error) {
            //setError(error);
            console.log(error)
            window.alert(error)
        } finally {
            //setIsLoading(false);
            console.log("PROMESA LOGIN OK")
        }
    };


    //console.log(isLogged)
    return (
        <div className="LoginPage">
            <div className="container">
                <LoginForm onSubmit={handleSubmit}></LoginForm>
            </div>

        </div>
    )

}


export default LoginPage;