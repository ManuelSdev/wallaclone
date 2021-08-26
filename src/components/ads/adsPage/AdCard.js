/**
 * 
 * Este componente recibe un objeto anuncio y renderiza una tarjeta 
 *
 */

import { Link } from "react-router-dom";
import Button from "../../shared/Button";

const nameToUrl = (adName) => (
    adName.replace(/\s/g, "-")
)


const test = "hola test"
const urtTest = nameToUrl(test)



const AdCard = ({ ad, location }) => {
    //const ads = getAds();
    const adUrl = `${nameToUrl(ad.name)}-${ad._id}`
    //const foto = `${process.env.REACT_APP_API_BASE_URL}${ad.photo}`;
    const foto = 'https://via.placeholder.com/150';
    //const clica = (a) => console.log(a)
    //console.log(ad)
    const clica = () => { console.log(location) }
    return (

        <Link to={`/ads/${adUrl}`}>
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

export default AdCard