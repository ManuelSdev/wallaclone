import client from './client';

const advertsPath = '/apiv1/adverts';

export const getAds = () => {
    return client.get(`${advertsPath}`);
};