import React from "react"
import ModalWindow from "../shared/modalWindow/ModalWindow"
import Header from "./Header"
import useModal from "../customHooks/useModal"


const Layout = ({ children }) => {

    return (
        <div className="Layout" >
            <section className="section">
                <Header ></Header>
            </section>
            <main className="container ">
                {children}
            </main>

        </div>
    )
}

export default Layout