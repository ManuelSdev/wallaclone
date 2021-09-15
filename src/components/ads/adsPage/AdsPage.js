
import React from 'react';
import { getAds, getTest } from '../../../api/ads'
import "./AdsPage.scss"
import AdsGrid from './AdsGrid'
import usePromise from '../../customHooks/usePromise';
import Loader from '../../shared/Loaders/Loader';
import Layout from '../../layout/Layout';
import Button from '../../shared/Button';
const AdsPage = ({ ...props }) => {

    const { loading, error, throwPromise, data: ads } = usePromise([]);

    React.useEffect(() => {
        throwPromise(getAds())
    }, []);

    return (
        <Layout>

            <div className="AdsPage">
                PAGINA DE ANUNCIOS
                <AdsGrid ads={ads} {...props} />

                {loading &&
                    <Loader></Loader>
                }
            </div>
        </Layout>
    )
}

export default AdsPage