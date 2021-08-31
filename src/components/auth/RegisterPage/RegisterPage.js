import React from 'react';
//import Button from "../../shared/Button"
import RegisterForm from "./RegisterForm"
import { AuthContextConsumer } from '../context';
import { createUser } from '../../../api/user'
import usePromise from '../../customHooks/usePromise';
import { useHistory } from 'react-router-dom';

/**
 * 
 * AuthContextProvider "emite" un objeto value={authValue} que captamos con AuthContextConsumer
 * Este tiene tres propiedades
 * Pasamos como parámetro solo las que usamos: onLogin
 * El paso de parámetros anterior es igual que cuando llegan por props que baja el padre
 * 
 */
const RegisterPage = () => {

    const { loading, error, throwPromise, data: userCreated } = usePromise(false)
    //Este método bajará como prop onSubmit a <LoginForm>
    const history = useHistory()
    const handleSubmit = async newUserData => {
        await throwPromise(createUser(newUserData));
        history.push("/auth/login")
    }

    return (
        <div className="RegisterPage">
            <div className="container">
                <RegisterForm error={error?.reason} onSubmit={handleSubmit}></RegisterForm>
            </div>

        </div>
    )


};





export default RegisterPage;