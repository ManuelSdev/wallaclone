import React from 'react';
import { getAds } from '../../../api/ads'
import "./AdsPage.scss"
import AdsGrid from './AdsGrid'
import usePromise from '../../customHooks/usePromise';
import Loader from '../../shared/Loaders/Loader';
const AdsPage = ({ ...props }) => {

    const { loading, error, throwPromise, data: ads } = usePromise([]);



    React.useEffect(() => {
        throwPromise(getAds())
    }, []);
    console.log(ads)
    return (
        <div className="AdsPage">
            PAGINA DE ANUNCIOS
            <AdsGrid ads={ads} {...props} />
            {loading &&
                <Loader></Loader>
            }
        </div>
    )
}

export default AdsPage