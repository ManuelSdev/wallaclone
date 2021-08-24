import AdsGrid from "../../ads/adsPage/AdsGrid"
import usePromise from "../../customHooks/usePromise";
import React from "react";
import { getAds } from "../../../api/ads";
import Loader from "../../shared/Loaders/Loader";
const UserFavoritesPage = ({ ...props }) => {


    const { loading, error, throwPromise, data: ads } = usePromise([]);



    React.useEffect(() => {
        throwPromise(getAds())
    }, []);
    return (

        <div className="UserFavoritesPage">
            FAVORITOS
            <AdsGrid ads={ads} {...props} />
            {loading &&
                <Loader></Loader>
            }
        </div>
    )
}

export default UserFavoritesPage