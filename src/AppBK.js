import { useState } from 'react';
import './App.css';
import AdminLogIn from './pages/adminLogIn';
import { Route, Routes } from 'react-router-dom';
import NewsDetail from './pages/newsDetail';
import Home from './pages/home';
import AddingNews from './pages/addingNews';
import Dashboard from './pages/Dashboard';


function App() {
  const [isAdmin, setIsAdmin] = useState(false);


  if (!isAdmin) {
    return (
      <div>
        <Routes>
          <Route exact path='/' element={<Home setIsAdmin={setIsAdmin} />} />
          <Route path="/newsDetail/:id" element={<NewsDetail />} />
        </Routes>
      </div >
    );
  } else {
    return (
      <div>
        <Routes>
          <Route element={<AdminLogIn />} >
            <Route index path='/adminLogin' element={<Dashboard />} />
            <Route path="/addnews" element={<AddingNews />} />
            {/* <Route path="/users" element={<AddingNews />} />
            <Route path="/addusers" element={<AddingNews />} /> */}
          </Route>
        </Routes>
      </div>
    )
  }

}

export default App;
