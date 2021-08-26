import client from './client';

const adsPath = '/apiv1/adverts';
const myAdsPath = `${adsPath}/my-ads`
const oneAdPath = `${adsPath}/one-ad`
const myFavsAds = `${adsPath}/favs`
const updateAdPath = `${adsPath}/update`
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

export const getFavAds = () => {
    //${filterPath && filterPath}
    return client.get(`${myFavsAds}`);
};

export const updateAd = (adIdParams, newValues) => {
    //${filterPath && filterPath}
    console.log("ID PARAMS", adIdParams)
    return client.put(`${adsPath}/${adIdParams}`, newValues);
};


export const createAd_NO = adDetails => {
    const url = `${adsPath}`
    return client.post(url, adDetails);
};


