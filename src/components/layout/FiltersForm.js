import FormField from "../shared/formFields/FormField"
import SelectTags from "../shared/formFields/SelectTags/SelectTags"
import SortButton from "./filtersButtons/SortButton"


const FiltersForm = () => {


    return (
        <div className="navbar-start">
            <div className="navbar-item">
                <div>Precio mínimo</div>
                <FormField
                    type="tel"
                    name="minPrice"
                // label="Precio desde"

                // value={minPrice}

                //min="1"
                //step="10"

                // onChange={handleChange}
                >
                </FormField>
            </div>

            <div className="navbar-item">
                <div>Precio máximo</div>
                <FormField
                    type="tel"
                    name="maxPrice"
                // label="Precio desde"

                // value={maxPrice}

                //min="1"
                //step="10"

                //onChange={handleChange}
                >
                </FormField>
            </div>
        </div>
    )



}

export default FiltersForm