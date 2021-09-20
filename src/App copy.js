//TEST COMMIT

import logo from './logo.svg';
//import './App.css';
import React from 'react';
import LoginPage from './components/auth/LoginPage/LoginPage';
import RegisterPage from './components/auth/RegisterPage/RegisterPage';
import { Switch, Route, Redirect, Router, useHistory } from 'react-router-dom';
import Layout from './components/layout/Layout';
import UserPage from './components/userPage/UserPage';
import NewAdPage from './components/ads/newAdPage/NewAdPage'
import AdsPage from './components/ads/adsPage/AdsPage'

import { logout } from "./api/user"
import AdDetailsPage from './components/ads/AdDetailsPage/AdDetailsPage';
import ChatPage from './components/chatPage/ChatPage';
import HomePage from './components/homePage/HomePage';
import NotFoundPage from './NotFoundPage';
import PrivateRoute from './components/auth/privateRouter/PrivateRoute';
import MemberPage from './components/memberPage/MemberPage';

import useForm from './components/customHooks/useForm';

import { AuthProvider } from './components/auth/context';
import { SearchProvider } from "./components/context/SearchContext"
import usePromise from './components/customHooks/usePromise';
import { getAds } from './api/ads';

function App({ autoLogged }) {
  //const autoLogged = false
  const history = useHistory()
  /**
   * AuthContext
   */
  const [isLogged, setIsLogged] = React.useState(autoLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => {
    logout()
    setIsLogged(false)
    history.push('/')
  }
  const loginProps = { isLogged, handleLogin, handleLogout };

  /**
   * SearchContext
   */
  //const [searchKeys, setSearchKeys] = React.useState("hola")


  const { formValue: searchKeys, handleChange, handleSubmit, validate, setFormValue } = useForm({

    keywords: '',
    sale: true,
    /*
        maxPrice: "",
        minPrice: "",
        
      get price() {
              return [this.minPrice, this.maxPrice]
            },
            set price(value) {
              console.log("set");
        
              [this.minPrice, this.maxPrice] = value
            },
        */
    get minPrice() {
      console.log("+++++++++++++++++ MIN")
      return this.price[0]
    },
    get maxPrice() {
      console.log("+++++++++++++++++ MAX")
      return this.price[1]
    },

    set minPrice(value) {
      console.log("+++++++++++++++++ SET MIN")
      console.log("value")
      this.price[0] = value
    },

    set maxPrice(value) {
      console.log("+++++++++++++++++ SET MAX")
      console.log("value")
      this.price[1] = value
    },


    price: ["", ""],


    tags: [],
    start: "",
    sort: ""
  });



  const { loading, error, throwPromise, data: ads } = usePromise([])

  const onSubmit = async (searchKeys) => {
    await throwPromise(getAds(searchKeys));
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    console.log(searchKeys)
    //getAds(searchKeys)
    history.push("/ads");
  };

  const handleSearchSubmit = handleSubmit(onSubmit)

  const searchProps = { ads, loading, searchKeys, handleChange, handleSearchSubmit, validate, setFormValue }
  /*
    React.useEffect(() => {
    }, [searchKeys]);
  */

  console.log("-------------------------------------------------------------------  RENDER EN APP.JS")
  /*
  console.log(searchKeys)
  console.log(searchKeys.price)
  */
  return (
    <div className="App ">
      <AuthProvider {...loginProps}>
        <SearchProvider {...searchProps}>
          <Switch>
            <PrivateRoute path="/user" component={UserPage}></PrivateRoute>
            <PrivateRoute exact path="/chat" component={ChatPage}></PrivateRoute>
            <PrivateRoute exact path="/ads/new" component={NewAdPage}></PrivateRoute>
            <Route exact path="/ads/:adUrl" component={AdDetailsPage}></Route>
            <Route exact path="/ads" component={AdsPage}></Route>
            <Route path="/members/:memberId" component={MemberPage}></Route>
            <Route path="/" component={HomePage}></Route>
            {/*<Route path="/" component={AdsPage}></Route>
             <Route path="/">
              {(routeProps) => (<AdsPage adUrl={dinamicAdDetailsUrl} />)}
            </Route>*/}
            <Route exact path="/404">
              <NotFoundPage />
            </Route>
            {/*Si no matchea ninguna ruta anterior, redirect a /404*/}
            <Redirect to="/404" />
          </Switch>
        </SearchProvider>
      </AuthProvider>
    </div >
  );
}

export default App;

