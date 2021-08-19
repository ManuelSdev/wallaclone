import { Children } from "react"
import { Link } from "react-router-dom"



const Button = ({ children, link, ...props }) => {

    return (

        <button className='button is-primary'  {...props}>{children}</button>

    )
}

export default Button