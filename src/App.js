//TEST COMMIT

import logo from './logo.svg';
//import './App.css';
import React from 'react';
import LoginPage from './components/auth/LoginPage/LoginPage';
import RegisterPage from './components/auth/RegisterPage/RegisterPage';
import { Switch, Route, Redirect, Router, useHistory, useLocation } from 'react-router-dom';
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
  const location = useLocation()
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
    sale: null,
    price: [],
    tags: [],
    start: "",
    sort: ""

  });

  const { loading, error, throwPromise, data: ads } = usePromise([])

  const onSubmit = async (searchKeys) => {
    await throwPromise(getAds(searchKeys));
    history.push("/ads");
  };

  const handleSearchSubmit = handleSubmit(onSubmit)

  const searchProps = { throwPromise, ads, loading, searchKeys, handleChange, onSubmit, handleSearchSubmit, validate, setFormValue }
  console.log("LOCATION QUE PILLA EL APP", location.pathname)
  //Borrar
  React.useEffect(() => {
    //console.log("USE EFFECT DE APP : CAMBIO EN searchKeys y pasan a ser: ", location.pathname)
    location.pathname === "/ads" || setFormValue(
      {
        keywords: '',
        sale: null,
        price: [],
        tags: [],
        start: "",
        sort: ""
      }
    )
  }, [location.pathname]);

  // console.log("Render en app.js: valor de searchKeys ", searchKeys)

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

