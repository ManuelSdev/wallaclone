import React from "react"
import { useParams } from "react-router";
import { getOneAd, updateAd } from "../../../api/ads"
import ModalWindow from "../../shared/modalWindow/ModalWindow";
import style from '../../ads/newAdPage/NewAdPage.module.scss'
import usePromise from "../../customHooks/usePromise";
import AdForm from "../newAdPage/AdForm";



const NewAdPage = () => {
    const { loading, error, throwPromise, data: ad } = usePromise({})

    //Pillo los parametros de la url que ponen los Link de cada anuncio con el nombre+id de cada uno de ellos
    const { adId } = useParams();
    //console.log(adId)

    //CathadIdUrl() extrae el id de anuncio y lo guardo en la propiedad adId del objeto que mando en la petición
    const adIdRequest = adId
    //console.log("RENDER EN EDIT PAGE")
    //console.log("EDIT PAGE ad", ad)

    React.useEffect(() => {
        //console.log("lanza promesa en editpage")
        throwPromise(getOneAd(adIdRequest))

    }, [])
    /**
     * Este método crea y retorna el objeto que mando en la petición update
     */
    /*
        const onSubmit = (newValues) => {
            const updateAdRequest = {}
            updateAdRequest.adId = adId
            updateAdRequest.newValues = newValues
            throwPromise(updateAd(updateAdRequest))
        }
    */
    const onSubmit = (newAdValues) => {
        console.log(ad._id)
        throwPromise(updateAd(ad._id, newAdValues))
    }

    //console.log('++++++++++++++++++++EDIT REQUEST')
    return (
        <div className={style.NewAdPage}>
            EDIT PAGE
            <div className={style.container}>
                {
                    loading ?
                        "LOADING"
                        :
                        <AdForm ad={ad} onSubmit={onSubmit} ></AdForm>
                }

            </div>
        </div>
    )
}

export default NewAdPage