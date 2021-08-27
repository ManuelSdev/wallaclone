
import React from 'react'
import usePromise from '../../customHooks/usePromise'

const propsModal = () => {
    const [modalClass, setModalClass] = React.useState("modal")
    const { loading, error, throwPromise } = usePromise({})

    const openModal = () => {
        //e.stopPropagation();
        //e.nativeEvent.stopImmediatePropagation();
        console.log('open');
        setModalClass("modal is-active")
    }

    const closeModal = () => {
        console.log('close');
        setModalClass("modal")
    }
}