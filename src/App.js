//TEST COMMIT

import logo from './logo.svg';
//import './App.css';
import React from 'react';
import LoginPage from './components/auth/LoginPage/LoginPage';
import RegisterPage from './components/auth/RegisterPage/RegisterPage';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import UserPage from './components/userPage/UserPage';
import NewAdPage from './components/ads/newAdPage/NewAdPage'
import AdsPage from './components/ads/adsPage/AdsPage'
import { AuthProvider } from './components/auth/context';
import { logout } from "./api/user"
import AdDetailsPage from './components/ads/AdDetailsPage/AdDetailsPage';
import ChatPage from './components/chatPage/ChatPage';
import HomePage from './components/homePage/HomePage';
import NotFoundPage from './NotFoundPage';
import PrivateRoute from './components/auth/privateRouter/PrivateRoute';


function App({ autoLogged }) {
  //const autoLogged = false
  const [isLogged, setIsLogged] = React.useState(autoLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => {
    logout()
    setIsLogged(false);
  }
  const dinamicAdDetailsUrl = null;
  const loginProps = { isLogged, handleLogin, handleLogout };
  return (
    <div className="App ">
      <AuthProvider {...loginProps}>
        <Layout>
          <Switch>
            {/**
             *          <Route path="/auth/login" component={LoginPage}></Route>
            <Route path="/auth/register" component={RegisterPage}></Route>
             */}


            <PrivateRoute path="/user" component={UserPage}></PrivateRoute>
            <PrivateRoute path="/chat" component={ChatPage}></PrivateRoute>
            <PrivateRoute path="/ads/new" component={NewAdPage}></PrivateRoute>

            <Route path="/ads/:adUrl" component={AdDetailsPage}></Route>
            <Route path="/ads" component={AdsPage}></Route>
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
        </Layout>
      </AuthProvider>

    </div>
  );
}

export default App;
