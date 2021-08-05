import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <RegisterPage></RegisterPage>
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
