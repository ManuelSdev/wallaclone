
import React from 'react';
import { getAds, getTest } from '../../../api/ads'
import "./AdsPage.scss"
import AdsGrid from './AdsGrid'
import usePromise from '../../customHooks/usePromise';
import Loader from '../../shared/Loaders/Loader';
import Layout from '../../layout/Layout';
import Button from '../../shared/Button';
import { useAuthContext } from '../../auth/context';
const AdsPage = ({ ...props }) => {

    const { loading, error, throwPromise, ads } = useAuthContext([]);
    const { areFiltersOn, handleFiltersAreOn, handleFiltersAreOff } = useAuthContext()
    const { filter } = useAuthContext()
    const { searchKeys } = filter;
    /*
        React.useEffect(() => {
            throwPromise(getAds())
        }, []);
    */

    console.log("FILTERS ON?", ads)
    return (
        <Layout>

            <div className="AdsPage">
                PAGINA DE ANUNCIOS
                {areFiltersOn && <AdsGrid ads={ads} {...props} />}

                {loading &&
                    <Loader></Loader>
                }
            </div>
        </Layout>
    )
}

export default AdsPage