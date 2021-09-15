import logo from './logo.svg';
import './App.css';
import { Route } from  'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
      <>
      <Header></Header>
      <Route component={HomePage} path="/" exact></Route>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={RegisterPage} path="/register"></Route>
      </>
      
  );
}

export default App;
