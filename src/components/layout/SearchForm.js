
import { getAds } from "../../api/ads";
import usePromise from "../customHooks/usePromise";
import Button from "../shared/Button";
import FormField from "../shared/formFields/FormField"
import SelectTags from "../shared/formFields/SelectTags/SelectTags";
import { useSearchContext } from "../context/SearchContext";
import { useHistory } from "react-router";
//import useForm from "../customHooks/useForm";

const SearchForm = ({ onSubmit }) => {
    const { searchKeys, handleChange, handleSearchSubmit, validate, setFormValue } = useSearchContext()
    const { keywords } = searchKeys




    return (

        <form className="is-expanded  is-flex-grow-1" onSubmit={handleSearchSubmit}>
            <FormField
                type="text"
                name="keywords"
                //placeholder="¿Qué vas a vender?"
                //onChange={even => console.log(even.target)}
                //handleChange cambia el estado a medida que se escribe
                onChange={handleChange}
                //value toma el valor que vamos teniendo en el estado
                value={keywords}
            >
            </FormField>


            {/*<Button type="submit" >Buscar</Button>*/}


        </form >




    )


}

export default SearchForm