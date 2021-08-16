import AdCard from "./AdCard"


const AdsGrid = ({ ads }) => {



    return (
        <div className="AdsGrid">
            <div className="columns is-multiline is-mobile">
                {ads.map(ad => (
                    <div class="column is-one-quarter">
                        <AdCard key={ad.id} ad={ad} ></AdCard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdsGrid