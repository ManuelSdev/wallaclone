import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { getOneAd, deleteAd } from "../../../api/ads"
import usePromise from "../../customHooks/usePromise"
import AdDetailsCard from "./AdDetailsCard"
import { useAuthContext } from '../../../components/auth/context';
import CardHeader from "./CardHeader"
import UserCardHeader from "./UserCardHeader"
import Layout from "../../layout/Layout"

const catchAdIdUrl = (url) => {
    const index = 1 + url.lastIndexOf("-")
    const adId = url.slice(index)
    return adId
}

//console.log(typeof (adUrl.lasIndexOf("-")))

const AdDetailPage = () => {
    const { isLogged } = useAuthContext()
    const { loading, error, throwPromise, data: ad } = usePromise({})
    const history = useHistory()

    //Pillo los parametros de la url que ponen los Link de cada anuncio con el nombre+id de cada uno de ellos
    const { adUrl } = useParams();
    //CathadIdUrl() extrae el id de anuncio y lo guardo en la propiedad adId del objeto que mando en la petición
    const adId = catchAdIdUrl(adUrl)

    React.useEffect(() => {
        throwPromise(getOneAd(adId))
    }, [])

    const handleDelete = async (ev) => {
        ev.stopPropagation();
        try {
            throwPromise(deleteAd(ad._id))
            await history.push("/user/ads");
            //console.log("history", history)
        } catch (error) {
            //setError(error);
            console.log(error)
            window.alert(error)
        } finally {
            //setIsLoading(false);
            //console.log("PROMESA LOGIN OK")
        }
    }
    return (
        <Layout>
            <div className="AdDetailPage">
                DETALLE ANUNCIO
                <div>{ad.name}</div>
                <AdDetailsCard
                    ad={ad}
                    cardHeader={
                        loading ?
                            null
                            :
                            isLogged && ad.userId === ad.requesterId ?
                                <UserCardHeader handleDelete={handleDelete} ad={ad} />
                                :
                                <CardHeader ad={ad} />
                    }
                ></AdDetailsCard>
            </div>
        </Layout>
    )
}

export default AdDetailPage