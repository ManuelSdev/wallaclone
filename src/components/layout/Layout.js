import React from "react"
import ModalWindow from "../shared/modalWindow/ModalWindow"
import Header from "./Header"
import useModal from "../customHooks/useModal"
import FiltersBar from "./FiltersBar"

import { useAuthContext } from "./../../components/auth/context";
import { useSearchContext } from "./../context/SearchContext"


const Layout = ({ children }) => {
    const { isLogged } = useAuthContext()
    //const { searchKey } = useSearchContext()
    //console.log(searchKey)
    // console.log("FILTERS ON EN LAYOUT?", areFiltersOn)
    return (
        <div className="Layout  " >
            <div className="section">
                <Header ></Header>

            </div>
            <main className=" section container ">
                {children}
            </main>

        </div >
    )
}

export default Layout