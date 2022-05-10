import Footer from './components/Footer';
import Header from './components/Header';
import TodoApp from './components/TodoApp';

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Register from './views/Register';
import Login from './views/Login';
import ResetPassword from './views/ResetPassword';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <div className="content_body">
            <TodoApp />
          </div>
        }
        />
        <Route path='/signup' element={ <Register /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/reset-password' element={ <ResetPassword /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
