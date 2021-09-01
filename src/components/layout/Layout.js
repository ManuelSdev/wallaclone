import React from "react"
import ModalWindow from "../shared/modalWindow/ModalWindow"
import Header from "./Header"
import useModal from "../customHooks/useModal"
import FiltersBar from "./FiltersBar"
import { LayoutProvider } from "../layout/LayoutContext"
import usePromise from "../customHooks/usePromise"
import useForm from "../customHooks/useForm"
import Button from "../shared/Button"


const Layout = ({ children }) => {

    const { loading, error, throwPromise, data: ads } = usePromise([]);

    const { handleChange, handleSubmit, validate, setFormValue, formValue: filter } = useForm({
        searchKeys: '',

    });

    const [areFiltersOn, setAreFiltersOn] = React.useState(false);
    const handleFiltersAreOn = () => setAreFiltersOn(true);
    const handleFiltersAreOff = () => setAreFiltersOn(false);

    const staticsSearchKeys = areFiltersOn && filter.searchKeys

    const getAdProps = { loading, error, throwPromise, ads }
    const searchFormProps = { handleSubmit, setFormValue, handleChange, filter }
    const filtersProps = { areFiltersOn, handleFiltersAreOn, handleFiltersAreOff };

    const allProps = { ...filtersProps, ...searchFormProps, ...getAdProps, staticsSearchKeys }

    // console.log("CONTEXX", useLayoutContext())


    // const { areFiltersOn, handleFiltersAreOn, handleFiltersAreOff } = useAuthContext();
    console.log("FILTERS ON EN LAYOUT?", areFiltersOn)
    return (
        <LayoutProvider {...allProps}>
            <div className="Layout" >
                <div className="section">
                    <Header ></Header>
                </div>
                {areFiltersOn &&
                    <div style={{ position: "fixed" }} className="">
                        <FiltersBar  ></FiltersBar>
                    </div>
                }
                <main className="container ">
                    {children}
                    <Button>sss</Button>
                </main>
            </div >

        </LayoutProvider>
    )
}

export default Layout