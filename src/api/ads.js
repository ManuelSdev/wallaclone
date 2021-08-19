import client from './client';

const advertsPath = '/apiv1/adverts';

export const getAds = () => {
    return client.get(`${advertsPath}`);
};

export const createAd_NO = adDetails => {
    const url = `${advertsPath}`
    return client.post(url, adDetails);
};
