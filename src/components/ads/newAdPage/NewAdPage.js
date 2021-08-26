import AdForm from "./AdForm"
import { createAd_NO } from "../../../api/ads"
import ModalWindow from "../../shared/modalWindow/ModalWindow";
import style from './NewAdPage.module.scss'
import { useAuthContext } from "../../auth/context";
const NewAdPage = () => {

    const { isLogged } = useAuthContext()
    console.log(isLogged)
    /*
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    //Esta uso de useRef almacena un valor que persiste mientras no lo cambies
    const isLogged = React.useRef(false);

    const resetError = () => setError(null);

    React.useEffect(() => {
        if (isLogged.current) {
            onLogin();
            const { from } = location.state || { from: { pathname: '/' } };
            //** const from = location.state ? location.state.from : {pathname: '/'}

            history.replace(from);
        }
    });
    */
    //Este método bajará como prop onSubmit a <LoginForm>
    const handleSubmit = async credentials => {
        // login(credentials).then(() => onLogin());
        //resetError();
        //setIsLoading(true);
        console.log("holi")
        try {
            await createAd_NO(credentials);
            //Los cambios en la referencia no ejectutan un nuevo render
            //isLogged.current = true;
        } catch (error) {
            //setError(error);
            //window.alert(error)
            console.log(error)
        } finally {
            //setIsLoading(false);
        }
    };



    return (
        <div className={style.NewAdPage}>
            SUBIR PRODUCTO
            <div className={style.container}>
                <AdForm onSubmit={handleSubmit}></AdForm>
            </div>
        </div>
    )
}

export default NewAdPage