
import './App.css';
import AdminLogIn from './pages/adminLogIn';
import { Route, Routes } from 'react-router-dom';
import NewsDetail from './pages/newsDetail';
import Home from './pages/home';
import AddingNews from './pages/addingNews';
import Dashboard from './pages/Dashboard';
import AdminUsers from './pages/adminUser';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/newsDetail/:id" element={<NewsDetail />} />
      </Routes>
      <Routes>
        <Route element={<AdminLogIn />} >
          <Route index path='/admin' element={<Dashboard />} />
          <Route path="/addnews" element={<AddingNews />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/addusers" element={<AddingNews />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
