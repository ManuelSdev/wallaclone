import FormField from "../shared/formFields/FormField"
import SelectTags from "../shared/formFields/SelectTags/SelectTags"
import SortButton from "./filtersButtons/SortButton"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../shared/Button";
import React from "react";
import SlidingPriceFilter from "./SlidingPriceFilter";

const FiltersForm = () => {

    const [priceDropdownState, setPriceDropdownState] = React.useState("")
    const [tagsDropdownState, setTagsDropdownState] = React.useState("")


    const handlepPriceDropdown = (buttonName) => {

        setTagsDropdownState("")
        priceDropdownState === "" ?
            setPriceDropdownState("is-active")
            :
            setPriceDropdownState("")
    }
    const handleTagsDropdown = (buttonName) => {
        setPriceDropdownState("")
        tagsDropdownState === "" ?
            setTagsDropdownState("is-active")
            :
            setTagsDropdownState("")
    }



    return (

        <div className="navbar-start">

            <div className="navbar-item">
                <div className={`dropdown ${priceDropdownState}`}>
                    <div className="dropdown-trigger">
                        <Button
                            onClick={handlepPriceDropdown}
                        >
                            <span>Precio</span>
                            <FontAwesomeIcon
                                className="icon "
                                aria-hidden="true" aria-haspopup="true" aria-controls="dropdown-menu"
                                icon={faAngleDown} size="sm" />
                        </Button>

                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">

                            <SlidingPriceFilter
                                onClick={handlepPriceDropdown}
                            >

                            </SlidingPriceFilter>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-item">
                <div className={`dropdown ${tagsDropdownState}`}>
                    <div className="dropdown-trigger">
                        <Button
                            onClick={handleTagsDropdown}
                        >
                            <span>Tags</span>
                            <FontAwesomeIcon
                                className="icon "
                                aria-hidden="true" aria-haspopup="true" aria-controls="dropdown-menu"
                                icon={faAngleDown} size="sm" />
                        </Button>

                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            contenido
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )



}

export default FiltersForm