import client from './client';
import { withFormData } from '../utils/converters';

const adsPath = '/apiv1/adverts';
const myAdsPath = `${adsPath}/my-ads`
const oneAdPath = `${adsPath}/oneAd`
const myFavsAds = `${adsPath}/favs`
const memberAds = `${adsPath}/memberAds`
const updateAdPath = `${adsPath}/update`

const params = new URLSearchParams({
    var1: "value",
    var2: "value2",
    arr: "foo",
});

//console.log(params.toString());
//console.log(Date.now)

export const getAds = (searchKeys) => {
    const params = new URLSearchParams(searchKeys)
    //${filterPath && filterPath}
    //console.log(params.toString())
    //console.log(params.toString())
    return client.get(`${adsPath}/?${params.toString()}`);
};


export const _getAds = () => {

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

export const getMemberAds = (authorParams) => {
    //${filterPath && filterPath}
    return client.get(`${memberAds}/${authorParams}`);
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

export const updateAd = withFormData((newValues, adIdParams) => {
    //console.log("ID PARAMSssssss", adIdParams)
    /*
    for (var value of newValues.values()) {
        console.log("VALUESSSSSSSSSSSSSSSSSSSSSSSSSSS", value);
    }
    */
    return client.put(`${adsPath}/${adIdParams}`, newValues);
})


export const old_updateAd = (adIdParams, newValues) => {
    //${filterPath && filterPath}
    console.log("ID PARAMSssssss", adIdParams)
    return client.put(`${adsPath}/${adIdParams}`, newValues);
};

export const updateImg = withFormData(newImg => {
    //console.log("NEW ADD*****************", newAd)
    return client.post(adsPath, newImg);
});