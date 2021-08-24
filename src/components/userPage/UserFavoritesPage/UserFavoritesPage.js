import usePromise from "../../customHooks/usePromise";
import React from "react";
import { getFavAds } from "../../../api/ads";
import Loader from "../../shared/Loaders/Loader";
import AdsFavoriteGrid from "../../ads/AdsFavoritesPage/AdsFavoriteGrid";
import Button from "../../shared/Button";


const UserFavoritesPage = ({ ...props }) => {

    const { loading, error, throwPromise, data: ads } = usePromise([]);
    let a = 7
    const mod = () => {
        a = a + 1
        ads.push(" ")
        console.log(a)
    }
    React.useEffect(() => {
        throwPromise(getFavAds())
    }, []);

    const newPromise = () => throwPromise(getFavAds())
    console.log(ads)
    return (
        <div className="UserFavoritesPage">
            FAVORITOS
            <Button onClick={mod}>{a}</Button>
            <AdsFavoriteGrid ads={ads} trigger={newPromise}{...props} />

            {loading &&
                <Loader></Loader>
            }
        </div>
    )
}

export default UserFavoritesPage