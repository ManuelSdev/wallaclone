import React from 'react'
import { ReactComponent as Heart } from "../../../assets/cards-heart.svg"
import { updateFavId, getFavoritesIds } from '../../../api/user'
import usePromise from '../../customHooks/usePromise'


const HeartIcon = ({ className, adId, ...props }) => {

    const { loading, error, throwPromise, data: userFavoritesIds } = usePromise([]);


    React.useEffect(() => {
        throwPromise(getFavoritesIds())
    }, [])

    const toggle = userFavoritesIds.includes(adId) ?
        {
            fav: () => throwPromise(updateFavId(adId, { action: 'pull' })),
            fill: "red",
            stroke: "green",
        }
        :
        {
            fav: () => throwPromise(updateFavId(adId, { action: 'push' })),
            fill: "white",
            stroke: "black",
        }



    /*
const toggleFav = () => {
    throwPromise(updateFavId(request))
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
    return userFavoritesIds.includes(adId) ? fillActive() : fillInactive()
}

const strokeHeart = () => {
    return userFavoritesIds.includes(adId) ? strokeActive() : strokeInactive()
}
console.log("RENDERRRR")
*/
    return (
        <div className={className}>
            <Heart onClick={toggle.fav} fill={toggle.fill} stroke={toggle.stroke} {...props}></Heart>
        </div>
    )
}
//onClick={toggle.fav} fill={toggle.fill} stroke={toggle.stroke}

export default HeartIcon