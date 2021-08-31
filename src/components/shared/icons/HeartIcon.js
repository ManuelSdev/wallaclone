import React from 'react'
import { ReactComponent as Heart } from "../../../assets/cards-heart.svg"
import { updateFavId, getFavoritesIds } from '../../../api/user'
import usePromise from '../../customHooks/usePromise'

/**
 * Las ...props que recibe son las width y height que pasan al svg
 */
const HeartIcon = ({ className, adId, ...props }) => {

    const { throwPromise, data: userFavoritesIds } = usePromise([]);


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

    return (
        <div className={className}>
            <Heart onClick={toggle.fav} fill={toggle.fill} stroke={toggle.stroke} {...props}></Heart>
        </div>
    )
}

export default HeartIcon