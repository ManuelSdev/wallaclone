import { Link, NavLink } from "react-router-dom"
import RoundImage from "../shared/roundImages/RoundImage"
import './UserNavBar.css'

const UserNavBar = () => {
    /**
     *                 <NavLink to="/user/profile" activeClassName="side-selected"><li >Perfil</li></NavLink>
                    <NavLink to="/user/ads"><li>Anuncios</li></NavLink>
                    <NavLink to="/user/chat"><li>Chat</li></NavLink>
                    <NavLink to="/user/favs"><li>Favoritos</li></NavLink>
                    <NavLink to="/user/ratings"><li>Valoraciones</li></NavLink>
                    <NavLink to="/user/statistics"><li>Estadisticas</li></NavLink>
     */


    return (
        //<div className="is-flex is-flex-direction-row">   
        <aside className="UserNavBar navbar">

            <ul className="menu-list">
                <li ><NavLink to="/user/profile" activeClassName="side-selected"><RoundImage>Perfil</RoundImage></NavLink></li>
                <li ><NavLink to="/user/ads" activeClassName="side-selected"><RoundImage>Anuncios</RoundImage></NavLink></li>
                <li ><NavLink to="/user/chat" activeClassName="side-selected"><RoundImage>Chat</RoundImage></NavLink></li>
                <li ><NavLink to="/user/favs" activeClassName="side-selected"><RoundImage>Favoritos</RoundImage></NavLink></li>
                <li ><NavLink to="/user/ratings" activeClassName="side-selected"><RoundImage>Valoraciones</RoundImage></NavLink></li>
                <li ><NavLink to="/user/statistics" activeClassName="side-selected"><RoundImage>Estadisticas</RoundImage></NavLink></li>

            </ul>
        </aside>
        // </div>

    )
}

export default UserNavBar