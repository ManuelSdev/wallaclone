import React from 'react';

const useModal = () => {
    const [modalClass, setModalClass] = React.useState("modal")

    const openModal = (e) => {
        //e.stopPropagation();
        //e.nativeEvent.stopImmediatePropagation();
        console.log('open');
        setModalClass("modal is-active")
    }

    const closeModal = () => {
        console.log('close');
        setModalClass("modal")
    }

    return {
        modalClass,
        openModal,
        closeModal
    }
}

export default useModal