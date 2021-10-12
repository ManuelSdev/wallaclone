import React from "react"
import ModalWindow from "../shared/modalWindow/ModalWindow"
import Header from "./Header"
import useModal from "../customHooks/useModal"
import FiltersBar from "./FiltersBar"

import { useAuthContext } from "./../../components/auth/context";
import { useSearchContext } from "./../context/SearchContext"
import UserNavBar from "../userPage/UserNavBar"
import { useLocation } from "react-router"


const Layout = ({ children }) => {
    const { isLogged } = useAuthContext()
    const { onSearch } = useSearchContext()
    const location = useLocation()
    const onUserpage = location.pathname.startsWith("/user")
    //const { searchKey } = useSearchContext()
    //console.log(searchKey)
    // console.log("FILTERS ON EN LAYOUT?", areFiltersOn)
    return (
        <div className="Layout  " >

            <div className="section" >
                <Header ></Header>

            </div>

            {onUserpage && <UserNavBar></UserNavBar>}
            <main className={`container ${
                //Cuando onSearch=true, la clase "section" crea un espacio adicional para FiltersBar.js
                onSearch &&
                "section"}`} >
                {children}
            </main>

        </div >
    )
}

export default Layout