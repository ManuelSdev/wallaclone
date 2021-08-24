
import AdFavoriteCard from "./AdFavoriteCard"

const AdsFavoriteGrid = ({ ads, ...props }) => {

    return (
        <div className="AdsFavoriteGrid">
            <div className="columns is-multiline is-mobile">
                {ads.map(ad => (
                    <div className="column is-is-one-fifth">
                        <AdFavoriteCard key={ad._id} ad={ad} {...props}></AdFavoriteCard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdsFavoriteGrid