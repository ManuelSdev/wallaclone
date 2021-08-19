import React from 'react';
import { getAds } from '../../../api/ads'
import "./AdsPage.scss"
import AdsGrid from './AdsGrid'
const AdsPage = () => {
    const [ads, setAds] = React.useState([]);

    React.useEffect(() => {
        getAds().then(setAds);
    }, []);

    return (
        <div className="AdsPage">
            PAGINA DE ANUNCIOS
            <AdsGrid ads={ads} />

        </div>
    )
}

export default AdsPage