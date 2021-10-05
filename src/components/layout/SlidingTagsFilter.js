import { useSearchContext } from "../context/SearchContext"
import Button from "../shared/Button"
import SelectTags from "../shared/formFields/SelectTags/SelectTags"



const SlidingTagsFilter = ({ onClick }) => {
    const { searchKeys, handleChange, handleSearchSubmit, validate, setFormValue } = useSearchContext()
    const { tags } = searchKeys
    const cancelClick = ev => {
        ev.preventDefault();
        onClick()
    }

    return (
        <form className="box" className="dropdown-item" autoComplete="off" onSubmit={handleSearchSubmit}>
            <div className="field" >
                <p className="control"> ¿En qué tags?</p>
            </div>
            <div className="field"></div>

            <SelectTags
                multiple
                name="tags"
                value={tags ? tags : []}
                onChange={handleChange}
                checkBoxLabelBefore={false}

            />

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
export default SlidingTagsFilter
