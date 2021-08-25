import React from 'react'
import { ReactComponent as Heart } from "../../../assets/cards-heart.svg"
import { updateFavorites, getFavoritesIds } from '../../../api/user'
import usePromise from '../../customHooks/usePromise'
import { AuthContextConsumer } from '../../auth/context'
import Button from '../Button'


const HeartIcon = ({ className, adId, throwPromise, userFavoritesIds, ...props }) => {

    //const { loading, error, throwPromise, data: userFavoritesIds } = usePromise({});


    React.useEffect(() => {
        throwPromise(getFavoritesIds())
    }, [])


    const a = () => console.log("jjklhsdjh", userFavoritesIds)
    //console.log("ORIGIN", clonedUserFavoritesIds)
    //console.log("CLONED", clonedUserFavoritesIds)
    /**El API inyecta la propiedad userId en el objeto que recibe en cada petición
     * Necesito el objeto userFavoritesIds en el API, así que creo un objeto request
     * para guardar userFavoritesIds en la propiedad request.favorites y, así, 
     * el API iyectará la nueva propiedad en el objeto request, dejando sub objeto
     * userFavoritesIds intacto
     */
    const request = {}
    console.log("ORIGIN", userFavoritesIds)
    const setFavsIds = () => {
        const clonedUserFavoritesIds = { ...userFavoritesIds }
        //console.log(clonedUserFavoritesIds)
        clonedUserFavoritesIds.hasOwnProperty(adId) ?
            //console.log("BORRANDO")
            delete clonedUserFavoritesIds[adId]
            :
            // console.log("AÑADIENDO")
            clonedUserFavoritesIds[adId] = adId
        console.log("CLONED", clonedUserFavoritesIds)
        return clonedUserFavoritesIds
    }

    const toggleFav = () => {
        //console.log("ANTES", clonedUserFavoritesIds)
        //console.log("TIENE?", clonedUserFavoritesIds.hasOwnProperty(adId))
        console.log("REQUEST 1", request)
        request.favorites = setFavsIds()
        // console.log("DESPUES", clonedUserFavoritesIds)
        console.log("REQUEST 2", request)
        throwPromise(updateFavorites(request))
    }


    const fillActive = () => {
        return "red"
    }

    const fillInactive = () => {
        return "white"
    }

    const strokeActive = () => {
        return "green"
    }

    const strokeInactive = () => {
        return "black"
    }

    const fillHeart = () => {
        return userFavoritesIds.hasOwnProperty(adId) ? fillActive() : fillInactive()
    }

    const strokeHeart = () => {
        return userFavoritesIds.hasOwnProperty(adId) ? strokeActive() : strokeInactive()
    }
    console.log("RENDERRRR")
    //console.log("RENDER", clonedUserFavoritesIds)


    return (
        <div className={className}>
            <Button onClick={a}></Button>
            <Heart onClick={toggleFav} fill={fillHeart()} stroke={strokeHeart()}{...props}></Heart>
        </div>
    )
}

const ConnectedHeartIcon = props => {
    return (
        <AuthContextConsumer>
            {value => <HeartIcon {...value.favProps} {...props} />}
        </AuthContextConsumer>
    );
};
export default ConnectedHeartIcon