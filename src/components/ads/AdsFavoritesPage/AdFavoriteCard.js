
import { Link } from "react-router-dom";


const nameToUrl = (adName) => (
    adName.replace(/\s/g, "-")
)
const AdFavoriteCard = ({ ad }) => {

    const adUrl = `${nameToUrl(ad.name)}-${ad._id}`

    const foto = 'https://via.placeholder.com/150';

    return (
        <Link to={adUrl}>
            <div className="AdCard">
                {/*<Button onClick={clica}></Button>*/}
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={foto} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content is-clipped">
                                <p className="title is-3">{ad.price} €</p>
                                <p className="subtitle is-4">{ad.name}</p>
                                <p className="subtitle is-6">{ad.description}</p>
                            </div>
                        </div>
                        <div className="content">
                            {ad.tags}
                        </div>
                    </div>
                </div>
            </div >
        </Link>
    )
}

export default AdFavoriteCard