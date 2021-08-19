import { Link } from "react-router-dom"



const LinkButton = ({ children, link, ...props }) => {

    return (
        <Link className='button is-primary' to={link}>
            {children}
        </Link>
    )
}

export default LinkButton