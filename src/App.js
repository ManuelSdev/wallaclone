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
      <AuthContextProvider value={loginProps}>
        <Layout>
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
