import React from 'react'
import { ReactComponent as Heart } from "../../../assets/cards-heart.svg"
import { modFavoriteId, getFavoritesIds } from '../../../api/user'
import usePromise from '../../customHooks/usePromise'


export default function HeartIcon({ className, adId, ...props }) {

    const { loading, error, throwPromise, data: userFavoritesIds } = usePromise({});
    const request = {}
    request.adId = adId

    React.useEffect(() => {
        throwPromise(getFavoritesIds())
    }, [])

    const toggleFav = () => {
        throwPromise(modFavoriteId(request))
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

    return (
        <div className={className}>
            <Heart onClick={toggleFav} fill={fillHeart()} stroke={strokeHeart()}{...props}></Heart>
        </div>
    )
}
