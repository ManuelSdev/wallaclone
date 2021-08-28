import React from "react"
import { useParams } from "react-router-dom"
import { getOneAd, deleteAd } from "../../../api/ads"
import usePromise from "../../customHooks/usePromise"
import AdDetailsCard from "./AdDetailsCard"
import { useAuthContext } from '../../../components/auth/context';
import CardHeader from "./CardHeader"
import UserCardHeader from "./UserCardHeader"

const catchAdIdUrl = (url) => {
    const index = 1 + url.lastIndexOf("-")
    const adId = url.slice(index)
    return adId
}

//console.log(typeof (adUrl.lasIndexOf("-")))

const AdDetailPage = () => {
    const { isLogged } = useAuthContext()
    const { loading, error, throwPromise, data: ad } = usePromise({})

    //Pillo los parametros de la url que ponen los Link de cada anuncio con el nombre+id de cada uno de ellos
    const { adUrl } = useParams();
    //Creo objeto para la petición
    const request = {}
    //CathadIdUrl() extrae el id de anuncio y lo guardo en la propiedad adId del objeto que mando en la petición
    request.adId = catchAdIdUrl(adUrl)

    //console.log(isLogged)

    React.useEffect(() => {
        throwPromise(getOneAd(request))
        console.log(ad)
    }, [])

    const handleDelete = (e) => {
        e.stopPropagation();
        throwPromise(deleteAd(ad._id))
    }

    return (
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
    )
}


export default AdDetailPage