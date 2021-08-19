import Button from "../Button";
import useModal from "../../customHooks/useModal";
import ModalWindow from "./ModalWindow";


const ModalButton = ({ children, component }) => {
    const { modalClass, openModal, closeModal } = useModal()

    return (
        <div>
            <Button onClick={openModal}>
                {children}
            </Button>
            <ModalWindow
                component={component}
                modalClasss={modalClass}
                openModal={openModal}
                closeModal={closeModal}
            >
            </ModalWindow>
        </div>


    )

}

export default ModalButton