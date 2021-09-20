
import { getAds } from "../../api/ads";
import usePromise from "../customHooks/usePromise";
import Button from "../shared/Button";
import FormField from "../shared/formFields/FormField"
import SelectTags from "../shared/formFields/SelectTags/SelectTags";
import { useSearchContext } from "../context/SearchContext";
import { useHistory } from "react-router";
//import useForm from "../customHooks/useForm";

const SearchForm = ({ onSubmit }) => {
    //const SearchForm = () => {
    const { throwPromise, searchKeys, handleChange, handleSearchSubmit, validate, setFormValue, updateFormValue } = useSearchContext()
    const { keywords } = searchKeys

    const defaultFilters = {
        sale: null,
        price: [],
        tags: [],
        start: "",
        sort: ""
    };

    /*
        const cleanSearchKeys = (onSubmits) => {
            
                    setFormValue(currentFormValue => ({
                        ...currentFormValue,
                        ...defaultFilters
                    }));
            
            console.log("holasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
            return onSubmits
        }
    
        const handleCleanSearchSubmit = cleanSearchKeys(handleSearchSubmit)
    */

    const cleanSearchKeys = (e) => {

        setFormValue(currentFormValue => ({
            ...currentFormValue,
            ...defaultFilters
        }));

        console.log("holasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", searchKeys)
        handleSearchSubmit(e)
    }

    const handleCleanSearchSubmit = (e) => cleanSearchKeys(e)



    //const a = () => handleCleanSearchSubmit(handleSearchSubmit)
    const b = () => console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")


    return (

        <form className="is-expanded  is-flex-grow-1" onSubmit={handleCleanSearchSubmit}>
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