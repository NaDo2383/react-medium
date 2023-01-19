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

  const navigate = useNavigate(); 


  const checkUserNamePassword = (userNamePara, passwordPara) => {
    let users = []
    userInfo.map(e => {
      users.push(e.username)
    })
    userInfo.map(e => {
      if (users.includes(userNamePara)) {
        if (e.isAdmin == false) {
          if (e.username === userNamePara && e.password === passwordPara) {
            modalHandler()
            setUser(userNamePara);
            setWrongPass(false)
          } else {
            setWrongPass(true)
          }
        } else if (e.isAdmin == true) {
          if (e.username === userNamePara && e.password === passwordPara) {
            modalHandler()
            setUser(userNamePara);
            navigate("/adminLogin");
            setIsAdmin(true)
            setWrongPass(false)
          } 
        } else {
          setWrongPass(true)
        }
      } else {
        setWrongPass(true)
      }
    })
  }
  if (!isAdmin) {
    return (
      <div>
        <Home  checkUserNamePassword={checkUserNamePassword}/>
        <Routes>
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
