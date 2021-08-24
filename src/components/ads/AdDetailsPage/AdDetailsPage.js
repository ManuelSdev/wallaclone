import React from "react"
import { useParams } from "react-router-dom"
import { getOneAd } from "../../../api/ads"
import usePromise from "../../customHooks/usePromise"
import AdDetailsCard from "./AdDetailsCard"


const catchAdIdUrl = (url) => {
    const index = 1 + url.lastIndexOf("-")
    const adId = url.slice(index)
    return adId
}

//console.log(typeof (adUrl.lasIndexOf("-")))

const AdDetailPage = () => {

    const { loading, error, throwPromise, data: ad } = usePromise({})

    //Pillo los parametros de la url que ponen los Link de cada anuncio con el nombre+id de cada uno de ellos
    const { adUrl } = useParams();
    //Creo objeto para la petición
    const request = {}
    //CathadIdUrl() extrae el id de anuncio y lo guardo en la propiedad adId del objeto que mando en la petición
    request.adId = catchAdIdUrl(adUrl)
    console.log(ad)

    React.useEffect(() => {
        throwPromise(getOneAd(request))
    }, [])




    return (
        <div className="AdDetailPage">
            DETALLE ANUNCIO
            <div>{ad.name}</div>
            <AdDetailsCard ad={ad}></AdDetailsCard>
        </div>
    )
}

export default AdDetailPage