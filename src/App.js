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
import { AuthContextProvider } from './components/auth/context';
import { logout } from "./api/user"
import AdDetailsPage from './components/ads/AdDetailsPage/AdDetailsPage';
import ChatPage from './components/chatPage/ChatPage';
import usePromise from './components/customHooks/usePromise';
import Button from './components/shared/Button';

function App({ autoLogged }) {
  //const autoLogged = false
  const [isLogged, setIsLogged] = React.useState(autoLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => {
    logout()
    setIsLogged(false);
  }
  const loginProps = { isLogged, handleLogin, handleLogout };

  const { loading, error, throwPromise, data: userFavoritesIds } = usePromise({});

  const favProps = { throwPromise, userFavoritesIds };
  console.log(userFavoritesIds)

  //console.log("APP RULES++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

  const a = () => console.log("jjklhsdjh", userFavoritesIds)


  return (
    <div className="App ">

      <AuthContextProvider value={{ loginProps, favProps }}>

        <Layout>
          <Button onClick={a}></Button>
          <Switch>
            <Route path="/auth/login" component={LoginPage}></Route>
            <Route path="/auth/register" component={RegisterPage}></Route>

            <Route path="/user" component={UserPage}></Route>
            <Route path="/chat" component={ChatPage}></Route>
            <Route path="/ads/new" component={NewAdPage}></Route>

            <Route path="/:adUrl" component={AdDetailsPage}></Route>
            <Route path="/" component={AdsPage}></Route>
            {/*<Route path="/" component={AdsPage}></Route>
             <Route path="/">
              {(routeProps) => (<AdsPage adUrl={dinamicAdDetailsUrl} />)}
            </Route>*/}




          </Switch>
        </Layout>
      </AuthContextProvider>

    </div>
  );
}

export default App;
