import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
import LoginPage from './components/auth/LoginPage/LoginPage';
import RegisterPage from './components/auth/RegisterPage/RegisterPage';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import UserPage from './components/userPage/UserPage';
import NewAdPage from './components/ads/newAdPage/NewAdPage'
import AdsPage from './components/ads/adsPage/AdsPage'
import testBulma from './components/test/testBulma'


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/auth/login" component={LoginPage}></Route>
          <Route path="/auth/register" component={RegisterPage}></Route>

          <Route path="/user" component={UserPage}>

          </Route>
          <Route path="/ads/new" component={NewAdPage}></Route>
          <Route path="/bulma" component={testBulma}></Route>
          <Route path="/" component={AdsPage}></Route>


        </Switch>
      </Layout>


    </div>
  );
}

export default App;
