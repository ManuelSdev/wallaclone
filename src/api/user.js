import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

export const createUser = userData => {
    return client.post('/apiv1/users/register', userData)
}


export const login = credentials => {
    console.log('credentials', credentials)
    return client.post('/apiv1/users/login', credentials).then(({ accessToken }) => {
        const hola = { humo: 7 }
        console.log('token', { accessToken })
        console.log('token2', accessToken)
        configureClient({ accessToken });
        storage.set('auth', accessToken);
    });
};

export const logout = () => {
    return Promise.resolve().then(() => {
        resetClient();
        storage.remove('auth');
    });
};
