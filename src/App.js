import { useState } from 'react';
import './App.css';
import AdminLogIn from './pages/adminLogIn';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NewsDetail from './pages/newsDetail';
import Home from './pages/home';
import {setUser, modalHandler, setWrongPass} from './pages/home'
import  {userInfo} from "./components/data"

function App() {
  const [isAdmin, setIsAdmin] = useState(false);


  if (!isAdmin) {
    return (
      <div>
        
        <Routes>
          <Route exact path='/' element={<Home setIsAdmin={setIsAdmin}/>} />
          <Route path="/newsDetail/:id" element={<NewsDetail />} />
        </Routes>
      </div >
    );
  } else {
    return (
      <div>
        <Routes>
          <Route exact path="/adminLogin" element={<AdminLogIn />} />
        </Routes>

      </div>
    )
  }

}

export default App;
