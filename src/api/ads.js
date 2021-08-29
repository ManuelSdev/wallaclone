import client from './client';
import { withFormData } from '../utils/converters';

const adsPath = '/apiv1/adverts';
const myAdsPath = `${adsPath}/my-ads`
const oneAdPath = `${adsPath}/oneAd`
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

export const getOneAd = (adIdParams) => {
    //${filterPath && filterPath}
    return client.get(`${oneAdPath}/${adIdParams}`);
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

export const deleteAd = (adIdParams) => {
    //${filterPath && filterPath}
    console.log("ID PARAMS", adIdParams)
    return client.delete(`${adsPath}/${adIdParams}`);
};

export const createAd_NO = adDetails => {
    console.log("NEW ADD*****************", adDetails)
    const url = `${adsPath}`
    return client.post(url, adDetails);
};

export const getTags = () => {
    return client.get(`${adsPath}/tags`);
};

export const createAd = withFormData(newAd => {
    //console.log("NEW ADD*****************", newAd)
    return client.post(adsPath, newAd);
});