import React from 'react';
import RegisterForm from "./RegisterForm"
import { createUser } from '../../../api/user'
import usePromise from '../../customHooks/usePromise';
import { useHistory } from 'react-router-dom';
import Loader from '../../shared/Loaders/Loader';


const RegisterPage = () => {

    const { loading, error, throwPromise } = usePromise()

    const history = useHistory()
    const handleSubmit = async newUserData => {
        await throwPromise(createUser(newUserData));
        history.push("/auth/login")
    }

    return loading ?
        <Loader />
        :
        (<div className="RegisterPage">
            <div className="container">
                <RegisterForm error={error?.reason} onSubmit={handleSubmit}></RegisterForm>
            </div>

        </div>
        )
};

export default RegisterPage;