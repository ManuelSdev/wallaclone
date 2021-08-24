

import React from 'react'
import LinkButton from '../../shared/LinkButton';
import { ReactComponent as HeartIcon2 } from "../../../assets/heart.svg"
import Button from '../../shared/Button';
import HeartIcon from "../../shared/icons/HeartIcon"



export default function AdDetailsCard({ ad }) {
    const foto = 'https://via.placeholder.com/150';
    return (
        <div className="adDetailCard container is-max-desktop">
            <div className="box">
                <div className="is-flex is-flex-direction-row is-justify-content-space-between">
                    <div className="is-flex is-flex-direction-row ">
                        <figure className="pr-4 image is-64x64">
                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                        <div>
                            <div >nombreUsuario</div>
                            <div>numeroProductos</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="pr-4">ratingStars</div>
                        <div>numeroValoraciones</div>
                    </div>
                    <div className="is-flex is-flex-direction-row  is-justify-content-flex-end ">
                        <HeartIcon
                            className="mr-2"
                            width="40"
                            height="40"
                            adId={ad._id}
                        ></HeartIcon>
                        <LinkButton link={"/chat"}>Chat</LinkButton>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-5by4">
                            <img src={foto} alt="Placeholder image"></img>
                        </figure>
                    </div>
                </div>
                <div className="card">
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
            </div>
        </div>
    )
}
