/**
 * Este componente recibe un objeto anuncio y renderiza una tarjeta 
 */

import { Link } from "react-router-dom";

const nameToUrl = (adName) => (
    adName.replace(/\s/g, "-")
)

const HorizontalAdCard = ({ ad }) => {

    const adUrl = `${nameToUrl(ad.name)}-${ad._id}`

    return (
        //<Link target="_blank" to={`/ads/${adUrl}`} className=" column is-one-quarter" > 
        //elimino target="_blank" , de momento,  para que no abra anuncio en nueva pestaña
        <Link to={`/ads/${adUrl}`} className=" column " >
            <div className="AdCard  ">
                {/*<Button onClick={clica}></Button>*/}
                <div className="card is-flex is-flex-direction-row" style={{ height: "200px" }}>
                    {ad.sale ?
                        <div className="card-image " style={{ objectFit: "contain" }}>

                            <figure className=" image is-128x128" >
                                <img src={ad.images} alt="Placeholder image" style={{ objectFit: "contain" }}></img>
                            </figure>
                        </div>
                        :
                        <div>ESTOY BUSCANDO</div>

                    }

                    <div className="card-content">
                        <div className="media">
                            <div className="media-content is-clipped ">
                                {ad.sale && <p className="title is-3">{ad.price} €</p>}

                                <p className="subtitle is-4">{ad.name}</p>
                                {/**<p className="subtitle is-6">{ad.description}</p> */}
                            </div>
                        </div>


                    </div>
                </div>
            </div >
        </Link>
    )
}

export default HorizontalAdCard