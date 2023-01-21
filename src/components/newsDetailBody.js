import React from 'react'
import  {menu, news, users,newsCat, userInfo} from "../components/data"

export default function NewsDetailBody({newsId}) {
    let newsCreatedUser = {};
    let newsCreatedUserId = "";
    let newsDetail = {};
    news.map(news => {
        if (news.id == newsId){
            newsCreatedUserId = news.createdUserId
            newsDetail={...news}
        }
    })
    users.map (users => {
        if(users.id == newsCreatedUserId){
            newsCreatedUser = {...users}
        }
    }) 

    console.log(newsDetail);

  return (
    <div>
        <div id='newsDetailMainSection'>
            <div id='newsDetailMainSection1'>
                <div id='newsDetailMain'>
                    <div id='newsDetailMainHead'>
                        <div id='createdUserInfo'>
                            <img src={newsCreatedUser.img} width="48px"/>
                            <div id='createdUserNameAndDate'>
                                <div>{newsCreatedUser.name}</div>
                                <div> {newsDetail.postedDate} · {newsDetail.read}</div>
                            </div>
                        </div>
                        <div id='socialIcons'>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-solid fa-link"></i>
                        </div>
                    </div>
                </div>
                <div id='newsDetailAside'>
                </div>
            </div>            
        </div>
    </div>
  )
}
