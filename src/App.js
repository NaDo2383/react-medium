import { useState } from 'react';
import './App.css';
import Aside from './components/aside';
import Banner from './components/banner';
import Header from './components/header';
import NewsCards from './components/newsCards';
import Trending from './components/trendingOnMedium';

function App() {
  let menu = ["Our story", "Membership", "Write", "Sign in",];
  let news = [
    {
      id: "1",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "1",
      postedDate: "Dec 29, 2022"
    },
    {
      id: "2",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "2",
      postedDate: "Dec 29, 2022"
    },
    {
      id: "3",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "3",
      postedDate: "Dec 29, 2022"
    },
    {
      id: "4",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "4",
      postedDate: "Dec 29, 2022"
    },
    {
      id: "5",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: false,
      category: "",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "5",
      postedDate: "Dec 29, 2022"
    },
    {
      id: "6",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "1",
      postedDate: "Dec 29, 2022"
    },
    {
      id: "7",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: true,
      category: "",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "2",
      postedDate: "Dec 29, 2022"
    },
    {
      id: "8",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: false,
      category: "",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "3",
      postedDate: "Dec 29, 2022"
    },
    {
      id: "9",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: false,
      category: "",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "4",
      postedDate: "Dec 29, 2022"
    },
    {
      id: "10",
      img: require("./pic/newsPic.png"),
      head: "Understanding Long Covid",
      title: "We know more now than before, and it’s still alarming",
      isTrending: false,
      category: "",
      key: "Long Covid",
      read: "9 min read",
      createdUserId: "5",
      postedDate: "Dec 29, 2022"
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

  return (
    <div>
      <Header menu1={menu}></Header>
      <Banner></Banner>
      <Trending usersdata={users} data={news} ></Trending>
      <section id='main'>
        <NewsCards usersdata={users} news={news} />
        <Aside catList={newsCat} />
      </section>
    </div >

  );
}

export default App;
