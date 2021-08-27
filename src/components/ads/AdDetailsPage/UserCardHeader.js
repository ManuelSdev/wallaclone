

import React from 'react'
import LinkButton from '../../shared/LinkButton';
import { ReactComponent as HeartIcon2 } from "../../../assets/heart.svg"
import Button from '../../shared/Button';
import HeartIcon from "../../shared/icons/HeartIcon"
import ModalButton from '../../shared/modalWindow/ModalButton';
import ConfirmActionPage from '../../shared/ConfirmActionPage';
import { deleteAd } from '../../../api/ads';
import usePromise from '../../customHooks/usePromise';
import { Redirect } from 'react-router';
export default function UserCardHeader({ ad }) {

    const { loading, error, throwPromise } = usePromise({})
    const handleDelete = () => {
        throwPromise(deleteAd(ad._id))

    }
    console.log(ad)
    return (

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
                <div className="pr-4">DESTÁCALO?</div>

            </div>
            <div className="is-flex is-flex-direction-row  is-justify-content-flex-end ">

                <Button className="mr-2">Vendido</Button>
                <Button className="mr-2">Reservado</Button>
                <LinkButton className="mr-2" link={`/user/edit/${ad._id}`}>Editar</LinkButton>
                <ModalButton
                    component={
                        <ConfirmActionPage
                            question={"¿Desea eliminar el anuncio?"}
                            confirmButtonText={"Eliminar anuncio"}
                            action={handleDelete}

                        />}
                >Eliminar</ModalButton>
            </div>
        </div>
    )

}
