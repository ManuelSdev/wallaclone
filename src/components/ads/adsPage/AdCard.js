/**
 * 
 * Este componente recibe un objeto anuncio y renderiza una tarjeta 
 *
 */

const AdCard = ({ ad }) => {
    //const ads = getAds();

    //const foto = `${process.env.REACT_APP_API_BASE_URL}${ad.photo}`;
    const foto = 'https://via.placeholder.com/150';

    //console.log(ad)
    return (
        <div className="AdCard">
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
    )

}

export default AdCard