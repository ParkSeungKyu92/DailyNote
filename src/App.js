import logo from './logo.svg';
import './App.css';
import { Route } from  'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
  return (
      <>
      <Header></Header>
      <Route component={HomePage} path="/" exact></Route>
      <Route component={LoginPage} path="/login"></Route>
      </>
  );
}

export default App;
