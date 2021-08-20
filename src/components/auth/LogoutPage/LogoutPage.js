import Button from "../../shared/Button"
import { AuthContextConsumer } from "../context"

const LogoutPage = ({ handleLogout }) => {

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

const ConnectedLogoutPage = props => {
    return (
        <AuthContextConsumer>
            {value => <LogoutPage {...value} {...props} />}
        </AuthContextConsumer>
    );
};

export default ConnectedLogoutPage;