import React from "react";
import { getMyAds } from "../../../api/ads"
import usePromise from '../../customHooks/usePromise';
import Loader from '../../shared/Loaders/Loader';
import AdsGrid from '../../ads/adsPage/AdsGrid'


const UserAdsPage = () => {
    const { loading, error, throwPromise, data: ads } = usePromise([]);
    React.useEffect(() => {
        throwPromise(getMyAds())
        console.log("USE EFFECT DE usersAdsPage")

    }, []);

    return loading ? (
        <Loader></Loader>
    ) :
        ads.length ? (
            <div className="UserAdsPage container">
                MIS ANUNCIOS

                <AdsGrid ads={ads} />

            </div>
        ) : (
            <div>NO TIENES ANUNCIOS</div>
        )
}

export default UserAdsPage