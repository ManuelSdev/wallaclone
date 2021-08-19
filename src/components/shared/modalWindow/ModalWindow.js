
function ModalWindow({ children, modalClasss, openModal, closeModal, component }) {

    return (
        <div className={modalClasss} >
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content" onClick={openModal}>
                <div className="box">

                    {component}

                </div>

            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    )

}

export default ModalWindow