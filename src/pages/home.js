import { useState } from 'react';
import '../App.css';
import Aside from '../components/aside';
import Banner from '../components/banner';
import Header from '../components/header';
import NewsCards from '../components/newsCards';
import Trending from '../components/trendingOnMedium';
import Modal from "../components/signInModal";
import AdminLogIn from '../pages/adminLogIn';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NewsDetail from '../pages/newsDetail';
import { menu, news, users, newsCat, userInfo } from "../components/data"


export default function Home({ setIsAdmin }) {


  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState("");
  const [wrongPass, setWrongPass] = useState(false)
  const userHandler = () => {
    setUser("");
  }
  const modalHandler = () => {
    setModal(!modal);
  }

  const [newsData, setNewsData] = useState(news);
  const [newsDataFiltered, setNewsDataFiltered] = useState(news);
  const [isFiltered, setIsFiltered] = useState(false)

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
            navigate("/admin");
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

  function catFilter(para) {
    setNewsDataFiltered(newsData.filter(newArr => newArr.category.includes(para)))
    setIsFiltered(true);
  }

  function iconHandler(para) {
    newsData.map((news, index) => {
      let newArr2 = [...newsData]
      if (news.id === para && news.isLiked === false) {
        newArr2[index].isLiked = true
        setNewsData(newArr2)
      } else if (news.id === para && news.isLiked === true) {
        newArr2[index].isLiked = false
        setNewsData(newArr2)
      }
    })
  }

  return (
    <div>
      <Header
        menu1={menu}
        modalHandler={modalHandler}
        user={user}
        setUser={userHandler} />
      <Banner user={user}></Banner>
      <Trending
        usersdata={users}
        data={news} ></Trending>
      <section id='main'>
        <NewsCards
          usersdata={users}
          news={isFiltered ? newsDataFiltered : newsData}
          iconHandler={iconHandler} user={user}
          navigate={navigate} />
        <Aside
          catList={newsCat}
          catFilter={catFilter} />
      </section>
      <Modal
        setModal={modalHandler}
        modal={modal}
        checkUserNamePassword={checkUserNamePassword}
        wrongPass={wrongPass}
      />
      <Routes>
        <Route
          path="/newsDetail/:id"
          element={<NewsDetail />} />
      </Routes>
    </div >
  )
}
