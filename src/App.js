import { createContext , useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import Login from './pages/Login';

export const UserContext = createContext()

function App() {
  const[ userState , setUserState] = useState({})
  const user = { userName : 'andy@gmail.com', accontType: 'admin', _id: '5645645767564'}
  return (

    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userState, setUserState}} >
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={ <Login />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
      

    </>

  );
}

export default App;
