import { useState } from 'react';
import './App.css';
import Aside from './components/aside';
import Banner from './components/banner';
import Header from './components/header';
import NewsCards from './components/newsCards';
import Trending from './components/trendingOnMedium';
import Modal from "./components/signInModal";

function App() {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState("");

  let userInfo = { username: "nado", password: "pass" }

  const modalHandler = () => {
    setModal(!modal);
  }

  const userHandler = () => {
    setUser("");
  }

  const checkUserNamePassword = (userNamePara, passwordPara) => {
    if (userInfo.username === userNamePara && userInfo.password === passwordPara) {
      modalHandler()
      setUser(userNamePara);
    } else {
      alert("Username or Password is incorrect")
    }
  }

  let menu = ["Our story", "Membership", "Write", "Sign in",];
  let news = [
    {
      id: "1",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid special",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "Programming,  Data Science",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "1",
      postedDate: "Dec 29, 2022",
      isLiked: false
    },
    {
      id: "2",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "Data Science",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "2",
      postedDate: "Dec 29, 2022",
      isLiked: false
    },
    {
      id: "3",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "Data Science",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "3",
      postedDate: "Dec 29, 2022",
      isLiked: false
    },
    {
      id: "4",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "Technology",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "4",
      postedDate: "Dec 29, 2022",
      isLiked: false
    },
    {
      id: "5",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: false,
      category: "Technology",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "5",
      postedDate: "Dec 29, 2022",
      isLiked: false
    },
    {
      id: "6",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "Technology",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "1",
      postedDate: "Dec 29, 2022",
      isLiked: false
    },
    {
      id: "7",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "Writing",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "2",
      postedDate: "Dec 29, 2022",
      isLiked: false
    },
    {
      id: "8",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: false,
      category: "Writing",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "3",
      postedDate: "Dec 29, 2022",
      isLiked: false
    },
    {
      id: "9",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: false,
      category: "Writing",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "4",
      postedDate: "Dec 29, 2022",
      isLiked: false
    },
    {
      id: "10",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: false,
      category: "Writing",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "5",
      postedDate: "Dec 29, 2022",
      isLiked: false
    },
  ]
  let users = [
    {
      id: "1",
      name: "Dr. Tom Frieden",
      img: require("./pic/icon.png")
    },
    {
      id: "2",
      name: "Dr. Tom Frieden",
      img: require("./pic/icon.png")
    },
    {
      id: "3",
      name: "Dr. Tom Frieden",
      img: require("./pic/icon.png")
    },
    {
      id: "4",
      name: "Dr. Tom Frieden",
      img: require("./pic/icon.png")
    },
    {
      id: "5",
      name: "Dr. Tom Frieden",
      img: require("./pic/icon.png")
    }
  ]
  let newsCat = [
    { id: 1, catName: "Programming" },
    { id: 2, catName: "Data Science" },
    { id: 3, catName: "Technology" },
    { id: 4, catName: "Self improvement" },
    { id: 5, catName: "Writing" },
    { id: 6, catName: "Reletionship" },
    { id: 7, catName: "Machine learning" },
    { id: 8, catName: "Productivity" },
    { id: 9, catName: "Politics" },
  ]

  const [newsData, setNewsData] = useState(news);
  const [newsDataFiltered, setNewsDataFiltered] = useState(news);
  const [isFiltered, setIsFiltered ] = useState(false)
  let newArr1 = [];

  function catFilter (para) {
    setNewsDataFiltered(newsData.filter(newArr => newArr.category.includes(para)))
    setIsFiltered(true);
  }

  function iconHandler (para) {
    newsData.map((news,index) => {
      let newArr2 = [...newsData]
        if(news.id===para && news.isLiked===false){
          newArr2[index].isLiked=true
          setNewsData(newArr2)
        }else if(news.id===para && news.isLiked===true){
          newArr2[index].isLiked=false
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
      <Trending usersdata={users} data={news} ></Trending>
      <section id='main'>
        <NewsCards usersdata={users} news={isFiltered? newsDataFiltered : newsData } iconHandler={iconHandler} user={user} />
        <Aside catList={newsCat} catFilter={catFilter}/>
      </section>
      <Modal
        setModal={modalHandler}
        modal={modal}
        checkUserNamePassword={checkUserNamePassword}
      />
    </div >

  );
}

export default App;
