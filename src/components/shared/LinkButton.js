import { Link } from "react-router-dom"



const LinkButton = ({ children, link, className, ...props }) => {

    return (
        <Link className={`button is-primary ${className}`} to={link} >
            {children}
        </Link >
    )
}

export default LinkButton