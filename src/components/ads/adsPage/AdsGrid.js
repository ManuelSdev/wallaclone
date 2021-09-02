import { useAuthContext } from "../../auth/context"
import AdCard from "./AdCard"
import React, { useRef } from 'react';


const AdsGrid = ({ ads, ...props }) => {



    return (
        <div className="AdsGrid">
            <div className="columns is-multiline is-mobile">
                {ads.map(ad => (
                    <AdCard key={ad._id} ad={ad} {...props}></AdCard>
                ))}


            </div>
        </div>
    )
}

export default AdsGrid