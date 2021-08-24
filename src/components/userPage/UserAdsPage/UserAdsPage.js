import React from "react";
import { getMyAds } from "../../../api/ads"
import usePromise from '../../customHooks/usePromise';
import Loader from '../../shared/Loaders/Loader';
import AdsGrid from '../../ads/adsPage/AdsGrid'


const UserAdsPage = () => {
    const { loading, error, throwPromise, data: ads } = usePromise([]);

    React.useEffect(() => {
        throwPromise(getMyAds())
    }, []);
    return (
        <div className="UserAdsPage container">
            MIS ANUNCIOS
            <Loader></Loader>
            <AdsGrid ads={ads} />
            {loading &&
                <Loader></Loader>
            }
        </div>
    )
}

export default UserAdsPage