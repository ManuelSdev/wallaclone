import AdForm from "./AdForm"
import { createAd_NO } from "../../../api/ads"
import ModalWindow from "../../shared/modalWindow/ModalWindow";
import style from './NewAdPage.module.scss'
import { useAuthContext } from "../../auth/context";
import Layout from "../../layout/Layout";
import { useHistory } from "react-router-dom";

//TODO: MANEJO ERRORES
const NewAdPage = () => {
    const history = useHistory()
    //TODO: TIRA DE usePromise
    const handleSubmit = async credentials => {

        try {
            await createAd_NO(credentials);
            await history.push("/user");
        } catch (error) {
            //setError(error);
            window.alert(error)
            console.log(error)
        } finally {
            //setIsLoading(false);
        }
    };

    return (
        <Layout>
            <div className={style.NewAdPage}>
                SUBIR PRODUCTO
                <div className={style.container}>
                    <AdForm onSubmit={handleSubmit}></AdForm>
                </div>
            </div>
        </Layout>
    )
}

export default NewAdPage