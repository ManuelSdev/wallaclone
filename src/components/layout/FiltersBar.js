import SortButton from "./filtersButtons/SortButton"


const FiltersBar = () => {


    return (
        <nav className="navbar  ">
            <div className="navbar-menu">
                <div className="navbar-start	">
                    <div className="navbar-item">
                        <div>Precio desde hasta</div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div>Tags</div>
                    </div>
                </div>
            </div>
        </nav >
    )



}

export default FiltersBar

/*
const Search = () => {
    return (
        <div className="Search is-flex-grow-1	">

            <div className="field has-addons">


                    <input className="input" type="text" placeholder="Busca en todas las categorías" />
                </div>
                <div className="control ">
                    <a className="button is-info">
                        Buscar
                    </a>
                </div>
            </div>
        </div>
    )

}
*/