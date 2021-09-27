import React from "react";
import FormField from "../shared/formFields/FormField"
import { useSearchContext } from "../context/SearchContext";

const SearchForm = () => {

    const { searchKeys, handleChange, onSubmit, validate, setFormValue } = useSearchContext()
    const { keywords } = searchKeys

    const defaultFilters = {
        sale: null,
        price: [],
        tags: [],
        start: "",
        sort: ""
    };

    const handleCleanSearchSubmit = (e) => {
        e.preventDefault();
        const onSubmitCb = (formValue) => onSubmit(formValue);
        setFormValue(currentFormValue => ({
            ...currentFormValue,
            ...defaultFilters
        }), onSubmitCb)
    }

    return (

        <form className="is-expanded  is-flex-grow-1" onSubmit={handleCleanSearchSubmit}>
            <FormField
                type="text"
                name="keywords"
                onChange={handleChange}
                value={keywords}
            >
            </FormField>
        </form >




    )


}

export default SearchForm