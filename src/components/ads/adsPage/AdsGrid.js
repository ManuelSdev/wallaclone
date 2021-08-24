import AdCard from "./AdCard"


const AdsGrid = ({ ads, ...props }) => {



    return (
        <div className="AdsGrid">
            <div className="columns is-multiline is-mobile">
                {ads.map(ad => (
                    <div className="column is-one-quarter">
                        <AdCard key={ad._id} ad={ad} {...props}></AdCard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdsGrid