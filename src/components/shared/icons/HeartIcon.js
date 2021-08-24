import React from 'react'
import { ReactComponent as Heart } from "../../../assets/cards-heart.svg"
import { modFavorite, getFavorites } from '../../../api/user'
import usePromise from '../../customHooks/usePromise'


export default function HeartIcon({ className, adId, ...props }) {

    const { loading, error, throwPromise, data: favorites } = usePromise({});
    const request = {}
    request.adId = adId

    React.useEffect(() => {
        throwPromise(getFavorites())
    }, [])

    const toggleFav = () => {
        throwPromise(modFavorite(request))
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
        return favorites.hasOwnProperty(adId) ? fillActive() : fillInactive()
    }

    const strokeHeart = () => {
        return favorites.hasOwnProperty(adId) ? strokeActive() : strokeInactive()
    }
    console.log("RENDERRRR")

    return (
        <div className={className}>
            <Heart onClick={toggleFav} fill={fillHeart()} stroke={strokeHeart()}{...props}></Heart>
        </div>
    )
}
