import Button from "../../shared/Button"
import { AuthContextConsumer, useAuthContext } from "../context"

const LogoutPage = () => {
    const { handleLogout } = useAuthContext()
    return (
        <div className="LogoutPage">
            <h2>¿Desea cerrar la sesión?</h2>
            <div className="buttons">
                <Button onClick={handleLogout}>Cerrar sesión</Button>
                <Button>Cancelar</Button>

            </div>
        </div>
    )
}



export default LogoutPage;