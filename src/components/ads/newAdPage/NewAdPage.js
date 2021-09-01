import { createAd } from "../../../api/ads"
import ModalWindow from "../../shared/modalWindow/ModalWindow";
import style from './NewAdPage.module.scss'
import { useAuthContext } from "../../auth/context";
import Layout from "../../layout/Layout";
import { useHistory } from "react-router-dom";
import AdForm from "./AdForm";
import usePromise from "../../customHooks/usePromise";

//TODO: MANEJO ERRORES
const NewAdPage = () => {
    const history = useHistory()


    const handleSubmit = async newAd => {
        try {
            await createAd(newAd);
            history.push("/user");
        } catch (error) {
            //setError(error);
            window.alert("ha ocurrido un error, vuela a intentarlo")
            console.log(error)
        } finally {
            //setIsLoading(false);
        }
    };

    return (
        <Layout>
            <div className={style.NewAdPage}>
                <div className={style.container}>
                    <AdForm onSubmit={handleSubmit}></AdForm>
                </div>
            </div>
        </Layout>
    )
}

export default NewAdPage




