import React from 'react';
//import Button from "../../shared/Button"
import RegisterForm from "./RegisterForm"
import { AuthContextConsumer } from '../context';
import { createUser } from '../../../api/user'

/**
 * 
 * AuthContextProvider "emite" un objeto value={authValue} que captamos con AuthContextConsumer
 * Este tiene tres propiedades
 * Pasamos como parámetro solo las que usamos: onLogin
 * El paso de parámetros anterior es igual que cuando llegan por props que baja el padre
 * 
 */
const RegisterPage = () => {
    /*
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    //Esta uso de useRef almacena un valor que persiste mientras no lo cambies
    const isLogged = React.useRef(false);

    const resetError = () => setError(null);

    React.useEffect(() => {
        if (isLogged.current) {
            onLogin();
            const { from } = location.state || { from: { pathname: '/' } };
            //** const from = location.state ? location.state.from : {pathname: '/'}

            history.replace(from);
        }
    });
    */
    //Este método bajará como prop onSubmit a <LoginForm>
    const handleSubmit = async newUserData => {
        // login(credentials).then(() => onLogin());
        //resetError();
        //setIsLoading(true);
        console.log("holi")
        console.log('DATOS', newUserData)
        try {
            await createUser(newUserData);
            //Los cambios en la referencia no ejectutan un nuevo render
            //isLogged.current = true;
            console.log('usuario creado', newUserData)
        } catch (error) {
            //setError(error);
            window.alert(error)
        } finally {
            //setIsLoading(false);
        }
    };


    //console.log(isLogged)
    return (
        <div className="RegisterPage">
            <div className="container">
                <RegisterForm onSubmit={handleSubmit}></RegisterForm>
            </div>

        </div>
    )

}

export default RegisterPage;