import { useSearchContext } from "../context/SearchContext"
import Button from "../shared/Button"
import FormField from "../shared/formFields/FormField"
import SelectRange from "../shared/SelectRange"
import React from "react"
import { faAngleDown, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ba from "../../assets/placeholder.png";
import Bo from "../../assets/compass.svg";

import { toHtml, icon } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const getSVGURI = (faIcon, color) => {
    const abstract = icon(faIcon).abstract[0];
    if (color) abstract.children[0].attributes.fill = color;
    return `data:image/svg+xml;base64,${btoa(toHtml(abstract))}`;
};

const SlidingPriceFilter = ({ onClick }) => {
    //console.log("renderRRRRRRRRRRRRRRRR")
    const { ads, searchKeys, handleChange, handleSearchSubmit, validate, setFormValue } = useSearchContext()
    const { price } = searchKeys
    const cancelClick = ev => {
        ev.preventDefault();
        onClick()
    }

    const handlePriceChange = ev => {
        setFormValue(currentFormValue => {
            const [currentMinPrice, currentmMaxPrice] = currentFormValue.price
            return ({
                ...currentFormValue,
                price: ev.target.name === "minPrice" ?
                    [ev.target.value, currentmMaxPrice]
                    :
                    ev.target.name === "maxPrice" && [currentMinPrice, ev.target.value]
            })
        })
    }


    //const maximun = Math.max(ads.map(({ price }) => price));
    const s = (ads.map(({ price }) => price))
        .filter(price => price !== undefined && price !== null)
    const maximun = Math.max(...
        (ads.map(({ price }) => price))
            .filter(price => price !== undefined && price !== null)
    )
    const style = { width: 600, margin: 50 };
    // console.log("VALORES QUE ENTRAN A MATHS", s)
    //console.log("MAXIMO", maximun)
    return (
        <form
            style={{
                backgroundPosition: "center center",
                backgroundSize: "20px 20px",
                //backgroundImage: `url(${faAngleDown})`, backgroundColor: "black"
                //backgroundImage: `url(${getSVGURI(faCaretDown)})`
            }}
            // style={{ backgroundImage: 'url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png")' }}
            className="AdForm" className="box" className="dropdown-item" autoComplete="off" onSubmit={handleSearchSubmit}>
            <div className="field" >
                <p className="control"> ¿Cuánto  quieres pagar?</p>
            </div>
            <div className="field">

                <SelectRange
                    name="price"
                    allowCross={false}
                    marks={{ 0: 0, [maximun]: maximun }}
                    min={0}
                    max={maximun}
                    //defaultValue={[0, maximun]}
                    value={price.length ?
                        price
                        :
                        [0, maximun]
                    }
                    onChange={handleChange}
                    //Doc de slider: estas dos props son arrays de obj = [{}]
                    trackStyle={[{ backgroundColor: 'green', height: 4 }]}
                    handleStyle={[
                        {
                            borderColor: 'grey',
                            height: 28,
                            width: 28,
                            marginTop: -12,
                            backgroundColor: 'white',
                            backgroundImage: `url(${getSVGURI(faAngleRight, 'green')})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "20px 20px",
                        },
                        {
                            borderColor: 'grey',
                            height: 28,
                            width: 28,
                            marginTop: -12,
                            backgroundColor: 'white',
                            backgroundImage: `url(${getSVGURI(faAngleLeft, 'green')})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "20px 20px",
                        }
                    ]}
                //railStyle={{ backgroundColor: 'red', height: 3 }}
                ></SelectRange>
                {/*</div>*/}
            </div>
            <div className="field is-horizontal">
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <FormField
                                type="number"
                                name="minPrice"
                                label="Desde"
                                value={price[0]}
                                onChange={handlePriceChange}
                            >
                            </FormField>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <FormField
                                type="number"
                                name="maxPrice"
                                label="Hasta"
                                value={price[1]}
                                onChange={handlePriceChange}
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
        </form >
    )
}
export default SlidingPriceFilter
