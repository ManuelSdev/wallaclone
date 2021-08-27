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
                modalClasss={modalClass}
                component={component}
                openModal={openModal}
                closeModal={closeModal}
            >
            </ModalWindow>
        </div>


    )

}

export default ModalButton