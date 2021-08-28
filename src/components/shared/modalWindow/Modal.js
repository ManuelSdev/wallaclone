import Button from "../Button"
function ModalWindow({ children, modalClasss, openModal, closeModal, component, handleDelete, confirmText }) {

    return (
        <div className={modalClasss} >
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content" onClick={openModal}>
                <div className="box">

                    {component}
                    <div className="buttons">
                        <Button onClick={handleDelete}>{confirmText}</Button>
                        <Button onClick={closeModal}>{children}</Button>

                    </div>
                </div>

            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    )

}

export default ModalWindow