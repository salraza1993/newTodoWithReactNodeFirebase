import { Route, Routes } from 'react-router-dom';
import Register from './views/Register';
import Login from './views/Login';
import ResetPassword from './views/ResetPassword';
import Home from './views/Home';
import './App.scss';
import { UserAuthContextProvider } from './contexts/AuthContexts';

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/signup' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/reset-password' element={ <ResetPassword /> } />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
