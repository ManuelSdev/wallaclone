import { Redirect } from "react-router-dom";
import Button from "./Button";



const ConfirmActionPage = ({ question, confirmButtonText, action, waitConfirm, redirectAfterConfirm, fun }) => {
    return (

        <div className="ConfirmActionPage">
            <h2>{question}</h2>
            <div className="buttons">
                <Button onClick={action}>{confirmButtonText}</Button>
                <Button>Cancelar</Button>

            </div>
        </div>
    )
}



export default ConfirmActionPage;