import AdCard from "../../ads/adsPage/AdCard"
import HorizontalAdCard from "./HorizontalAdCard"

const UserAdsGrid = ({ ads, ...props }) => {

    return (
        <div className="UserAdsGrid">
            <div className="">
                {ads.map(ad => (
                    <HorizontalAdCard key={ad._id} ad={ad} {...props}></HorizontalAdCard>
                ))}
            </div>
        </div>
    )
}

export default UserAdsGrid