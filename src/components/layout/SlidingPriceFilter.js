import { useSearchContext } from "../context/SearchContext"
import Button from "../shared/Button"
import FormField from "../shared/formFields/FormField"
import SelectRange from "../shared/SelectRange"



const SlidingPriceFilter = ({ onClick }) => {
    const { searchKeys, handleChange, handleSearchSubmit, validate, setFormValue } = useSearchContext()
    const cancelClick = ev => {
        ev.preventDefault();
        onClick()
    }
    return (
        <form className="AdForm" className="box" className="dropdown-item" >
            <div className="field" >
                <p className="control"> ¿Cuánto  quieres pagar?</p>
            </div>
            <div className="field">
                <SelectRange></SelectRange>
            </div>
            <div className="field is-horizontal">
                <div className="field-body">

                    <div className="field">
                        <div className="control">
                            <FormField
                                type="number"
                                name="minPrice"
                                label="Desde"
                            // value={price}
                            //min="1"
                            //step="any"
                            //  onChange={handleChange}
                            >
                            </FormField>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <FormField
                                type="number"
                                name="minPrice"
                                label="Hasta"
                            // value={price}
                            //min="1"
                            //step="any"
                            //  onChange={handleChange}
                            >
                            </FormField>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <Button onClick={cancelClick}>Cancelar</Button>
                </div>
                <div className="control">
                    <Button type="submit" >Aplicar</Button>
                </div>
            </div>

        </form>




    )
}
export default SlidingPriceFilter
