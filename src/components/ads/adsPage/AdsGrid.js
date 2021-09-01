import { useAuthContext } from "../../auth/context"
import AdCard from "./AdCard"
import React, { useRef } from 'react';


const AdsGrid = ({ ads, ...props }) => {
    const { areFiltersOn, handleFiltersAreOn, handleFiltersAreOff } = useAuthContext()
    const { loading } = useAuthContext()
    const { filters } = useAuthContext()
    const { searchKeys, minPrice, maxPrice, tags } = filters;
    //const { searchKeys } = filter;
    // loading || handleFiltersAreOff()
    console.log("SEARCHA KEYS VALUE", searchKeys)
    console.log("RENDER ADS GRID")

    console.log("keys", searchKeys)

    console.log("minprice", minPrice)
    console.log("tags", tags)

    //const staticsSearchKeys = React.useRef(searchKeys)
    // console.log("staticsSearchKeys", staticsSearchKeys.current)


    /**
     
    
     */



    return (
        <div className="AdsGrid">
            <div className="columns is-multiline is-mobile">
                {/*ads.map(ad => (
                    ad.name.includes(searchKeys) && <AdCard key={ad._id} ad={ad} {...props}></AdCard>
                ))*/}

                {ads.map(ad => (
                    (!tags.length) ?
                        (ad.name.includes(searchKeys) || ad.description.includes(searchKeys))
                        && (ad.price >= minPrice && ad.price <= maxPrice)
                        && <AdCard key={ad._id} ad={ad} {...props}></AdCard>
                        :
                        ((ad.tags.includes(tags[0]) || ad.tags.includes(tags[1]) || ad.tags.includes(tags[0]))
                            && (ad.name.includes(searchKeys) || ad.description.includes(searchKeys))
                            && (ad.price >= minPrice && ad.price <= maxPrice)
                            && <AdCard key={ad._id} ad={ad} {...props}></AdCard>
                        )))}

            </div>
        </div>
    )
}

export default AdsGrid