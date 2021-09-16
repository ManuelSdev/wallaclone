
import { getAds } from "../../api/ads";
import usePromise from "../customHooks/usePromise";
import Button from "../shared/Button";
import FormField from "../shared/formFields/FormField"
import SelectTags from "../shared/formFields/SelectTags/SelectTags";
import { useSearchContext } from "../context/SearchContext";
//import useForm from "../customHooks/useForm";

const SearchForm = ({ onSubmit }) => {
    const { searchFilters, handleChange, handleSubmit, validate, setFormValue } = useSearchContext()


    // console.log(searchKey)

    return (

        <form className="is-expanded  is-flex-grow-1" onSubmit={handleSubmit}>
            <FormField
                type="text"
                name="keywords"
            //placeholder="¿Qué vas a vender?"
            //onChange={even => console.log(even.target)}
            //handleChange cambia el estado a medida que se escribe
            // onChange={handleChange}
            //value toma el valor que vamos teniendo en el estado
            // value={searchKeys}
            >
            </FormField>


            {/*<Button type="submit" >Buscar</Button>*/}


        </form>




    )


}

export default SearchForm