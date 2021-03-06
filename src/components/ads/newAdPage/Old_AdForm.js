//import Button from "../../shared/Button"
//import FormField from "../../shared/FormField"
import React from 'react';
import Button from '../../shared/Button';
import CheckBoxField from '../../shared/formFields/CheckBoxGroup';
import FormField from '../../shared/formFields/FormField';
import RadioButton from '../../shared/formFields/RadioButton';
import RadioField from '../../shared/formFields/RadioField';
import TextAreaField from '../../shared/formFields/TextAreaField';


const AdForm = ({ onSubmit, isLoading, ad }) => {

    const [radioValue, setRadioValue] = React.useState("sell")
    const [values, setValues] = React.useState({
        name: '',
        sale: true,
        price: 1,
        tags: [],
        description: '',
        images: null
    });
    //useEffect solo aplica cuando recibimos la props "ad" que pasa EditAdPage.js, que usa este mismo
    //formulario para editar los detalles del anuncio
    //
    React.useEffect(() => {
        //console.log("useEffect ad", ad)
        setValues(
            {
                name: ad?.name ?? '',
                sale: null,
                price: ad?.price ?? 1,
                tags: [],
                description: ad?.description ?? '',
                images: null
            }
        )
        //    console.log("useEffect ad 2-", ad)
    }, [ad])
    const selectablesTags = ["Lifestyle", "leisure"]
    //El event lo recibe del onChange ("mezcla" del onchange y del oninput del form html)
    const handleChange = event => {

        //console.log('tttt', event.target.type)
        //console.log(sale)
        /**
         * Usamos spreading para machacar las propiedades el estado a medida que 
         * escribimos en los formfields
         * El <FormField name="email"> machacarĂ¡ la clave email
         * El <FormField name="password"> machacarĂ¡ la clave password
         */
        setValues(oldValues => {

            console.log('TYPE', event)
            console.log('radioValue', radioValue)
            console.log("value", event.target.value)
            console.log("checked", event.target.checked)

            // console.log(tags)
            const newValues = {
                ...oldValues,
                [event.target.name]: event.target.value,
            };
            console.log("sale", sale)
            console.log("cdre", newValues)
            console.log("++++++++++++++++++++++++++++")
            return newValues;
        });
    };
    /**
     * 
     * Este mĂ©todo sustituye al submit del form 
     * LlamarĂ¡ al mĂ©todo onSubmit (que el padre LoginPage pasa por props) 
     * pasando como parĂ¡metro las credentials para que LoginPage las use
     * en su propio mĂ©todo, tambiĂ©n llamado handleSubmit, para la pĂ©ticion
     * de login con el login() que importa de auth.js
     */
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(values);
        console.log("submit")
    };
    const { name, sale, price, tags, description, images } = values;
    //console.log(sale)
    const arra = ["casa", "salon"]
    return (
        <form className="AdForm" onSubmit={handleSubmit}>
            <FormField
                type="text"
                name="name"
                label="Â¿QuĂ© vas a vender?"
                placeholder="Â¿QuĂ© vas a vender?"
                //onChange={even => console.log(even.target)}
                //handleChange cambia el estado a medida que se escribe 
                onChange={handleChange}
                //value toma el valor que vamos teniendo en el estado
                value={name}
            >
            </FormField>
            <FormField
                type="tel"
                name="price"
                label="Precio"
                value={price}
                //min="1"
                //step="10"
                onChange={handleChange}
            >
            </FormField>
            <CheckBoxField
                multiple
                type="checkbox"
                tags={selectablesTags}
                name="tags"
                onChange={handleChange}
                value="value x"
            >
            </CheckBoxField>

            <RadioField>
                <RadioButton
                    // checked={[sale]}
                    //name="sale"
                    label=" Vender"
                    onChange={handleChange}
                    checked={radioValue === "buy"}
                    value="sell"
                >

                </RadioButton>
                <RadioButton
                    //name="sale"
                    label=" Comprar"
                    onChange={handleChange}
                    checked={radioValue === "sell"}
                    value="buy"
                ></RadioButton>

            </RadioField>

            <TextAreaField
                name="description"
                onChange={handleChange}
                value={description}
            >

            </TextAreaField>
            <Button type="submit" >Subir producto</Button>




        </form >

    )
}

export default AdForm