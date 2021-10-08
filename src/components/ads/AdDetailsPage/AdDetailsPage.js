import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { getOneAd, deleteAd } from "../../../api/ads"
import usePromise from "../../customHooks/usePromise"
import AdDetailsCard from "./AdDetailsCard"
import { useAuthContext } from '../../auth/context';
import MemberCardHeader from "./MemberCardHeader"
import UserCardHeader from "./UserCardHeader"
import Layout from "../../layout/Layout"
import Loader from "../../shared/Loaders/Loader"
import { getUserByName } from "../../../api/user"

const catchAdIdUrl = (url) => {
    const index = 1 + url.lastIndexOf("-")
    const adId = url.slice(index)
    return adId
}

//console.log(typeof (adUrl.lasIndexOf("-")))

const AdDetailPage = () => {
    const { isLogged } = useAuthContext()
    const { loading: loadingAd, error: errorAd, throwPromise: throwPromiseAd, data: ad } = usePromise({})
    const { loading: loadingAdOwnerUser, error: errorAdOwnerUser, throwPromise: throwPromiseAdOwnerUser, data: adOwnerUser } = usePromise({})
    const history = useHistory()

    //Pillo los parametros de la url que ponen los Link de cada anuncio con el nombre+id de cada uno de ellos
    const { adUrl } = useParams();
    //CathadIdUrl() extrae el id de anuncio y lo guardo en la propiedad adId del objeto que mando en la petición
    const adId = catchAdIdUrl(adUrl)

    React.useEffect(() => {
        throwPromiseAd(getOneAd(adId))
            .then(ad => throwPromiseAdOwnerUser(getUserByName(ad.author)))
    }, [])

    const handleDelete = async (ev) => {
        ev.stopPropagation();
        try {
            await throwPromiseAd(deleteAd(ad._id))
            history.push("/user/ads");
            console.log("anuncio fuera")
        } catch (error) {
            //setError(error);
            console.log(error)
            window.alert(error)
        }
    }
    return (
        <Layout>
            {loadingAd || loadingAdOwnerUser ?
                <Loader />
                :
                <div className="AdDetailPage">
                    <AdDetailsCard
                        ad={ad}
                        cardHeader={
                            loadingAd && loadingAdOwnerUser ?
                                null
                                :
                                isLogged && ad.userId === ad.requesterId ?
                                    <UserCardHeader handleDelete={handleDelete} ad={ad} publishedAds={adOwnerUser.publishedAds} />
                                    :
                                    <MemberCardHeader ad={ad} publishedAds={adOwnerUser.publishedAds} />
                        }
                    ></AdDetailsCard>
                </div>
            }
        </Layout>
    )
}

export default AdDetailPage