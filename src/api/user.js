import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

export const createUser = userData => {
    return client.post('/apiv1/users', userData)
}


export const login = credentials => {
    console.log('credentials', credentials)
    return client.post('/apiv1/login', credentials).then(({ accessToken }) => {
        console.log('token', { accessToken })
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
