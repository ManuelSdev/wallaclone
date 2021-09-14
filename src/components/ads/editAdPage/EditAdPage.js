import React from "react"
import { useHistory, useParams } from "react-router";
import { getOneAd, updateAd } from "../../../api/ads"
import style from '../../ads/newAdPage/NewAdPage.module.scss'
import usePromise from "../../customHooks/usePromise";
import AdForm from "../newAdPage/AdForm";



const EditAdPage = () => {
    const { loading, error, throwPromise, data: ad } = usePromise({})
    const history = useHistory()
    //Pillo los parametros de la url que ponen los Link de cada anuncio con el nombre+id de cada uno de ellos
    const { adId } = useParams();
    //CathadIdUrl() extrae el id de anuncio y lo guardo en la propiedad adId del objeto que mando en la petición
    const adIdRequest = adId
    //console.log("RENDER EN EDIT PAGE")
    //console.log("EDIT PAGE ad", ad)

    React.useEffect(() => {
        throwPromise(getOneAd(adIdRequest))
    }, [])

    const onSubmit = async (newAdValues) => {
        await throwPromise(updateAd(newAdValues, ad._id))
        history.push("/user");
    }

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

export default EditAdPage