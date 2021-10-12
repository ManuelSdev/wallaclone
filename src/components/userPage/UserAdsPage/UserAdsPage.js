import React from "react";
import { getMyAds } from "../../../api/ads"
import usePromise from '../../customHooks/usePromise';
import Loader from '../../shared/Loaders/Loader';
import AdsGrid from '../../ads/adsPage/AdsGrid'
import UserAdsGrid from "./UserAdsGrid";

const UserAdsPage = () => {
    const { loading, throwPromise, data: ads } = usePromise([]);
    React.useEffect(() => {
        throwPromise(getMyAds())
    }, []);

    return loading ? (
        <Loader></Loader>
    ) :
        ads.length ? (
            <div className="UserAdsPage container">
                <UserAdsGrid ads={ads} />
            </div>
        ) : (
            <div>NO TIENES ANUNCIOS</div>
        )
}

export default UserAdsPage