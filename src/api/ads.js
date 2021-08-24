import client from './client';

const adsPath = '/apiv1/adverts';
const myAdsPath = `${adsPath}/my-ads`
const oneAdPath = `${adsPath}/one-ad`

export const getAds = () => {
    //${filterPath && filterPath}
    return client.get(`${adsPath}`);
};

export const getMyAds = () => {
    //${filterPath && filterPath}
    return client.get(`${myAdsPath}`);
};

export const getOneAd = (adId) => {
    //${filterPath && filterPath}
    return client.post(`${oneAdPath}`, adId);
};




export const createAd_NO = adDetails => {
    const url = `${adsPath}`
    return client.post(url, adDetails);
};
