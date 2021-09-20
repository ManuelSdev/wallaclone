import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { Range } = Slider

/**
 * SelectRange recibe las siguientes props
 * -name:
 */
/**
 * Range está configurado para recibir una prop "onChange"
 * Esa prop será una función que recibe un parámetro
 * El parámetro que recibe NO ES el objeto/evento SyntheticBaseEvent
 * El parámetro que recibe ES un array con dos elementos: 
 *      - El valor actual del extremo inferior del rango
 *      - El valor actual del exremo superior del rango
 * CLAVE: necesitas una función que trabaje con ese array!! 
 */
const SelectRange = ({ name, onChange, min, max, ...props }) => {
    /**
     * SelecRange recibe una prop onChange
     * Esta prop contiene la funcion "handleChange" que provee el custom hook "useForm"
     * Esta función "handleChange" recibe un parametro
     * Este parámetro debería ser el objeto/evento SyntheticBaseEvent
     * "handleChange" trabaja con las siguientes propiedades del objeto SyntheticBaseEvent 
     * (propiedades de un input field de formulario):
     *      -target (input)
     *      -target.type (text, number, tel, etc...)
     *      -target.name (price, sale, name, tags, etc...)
     *      -target.value (mediante el método custom "getValueByType" )
     * CLAVE: esta función "handleChange" es la que pasas a Range en la prop "onChange"
     * CLAVE: Range no "inyecta" el  objeto SyntheticBaseEvent a la función que recibe en la prop "onChange"
     *      -Inyecta el array con los dos valores, min y max
     * CLAVE: Necesitas preparar una función "handleChange" que use la "handleChange" original que llega
     * a SelectRange en la prop "onChange"
     * CLAVE: Esta nueva función recibirá el array[min, max] y deberá inyectar a la original un objeto
     * con las propiedades que esta espera: target, etc..
     * 
     */


    const handleChange = ([minValue, maxValue]) => {
        onChange({ target: { name, value: [minValue || min, maxValue || max] } });
    };

    return <Range onChange={handleChange} min={min} max={max} {...props} />;
}
export default SelectRange
