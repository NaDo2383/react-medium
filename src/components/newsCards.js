import { Link } from "react-router-dom";

export default function NewsCards({ news, usersdata, iconHandler, user }) {
    news.map(a => {
        usersdata.map(b => {
            if (a.createdUserId === b.id) {
                a.createdUserInfo = b;
            }
        })
    })

    console.log(news);

    if (!user) {
        return (
            <div id="newsCards">
                {news.map(news => {
                    return (
                        <div className="newsCardContainer">
                            <div className="newsCard">
                                <div className="NewsJournalist">
                                    <img src={news.createdUserInfo.img} alt="" className="NewsJournalistIcon" />
                                    <span className="NewsJournalistName">{news.createdUserInfo.name}</span>
                                </div>
                                <Link reloadDocument={true} to={`/newsDetail/${news.id}`}>
                                    <h3 className="NewsHead">{news.head}</h3>
                                    <div className="NewsTitle">{news.title}</div>
                                </Link>
                                <div className="NewsDate">
                                    {news.postedDate} · {news.read}
                                </div>
                            </div>
                            <img src={news.img} alt="" />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div id="newsCards">
                {news.map(news => {
                    return (
                        <div className="newsCardContainer">
                            <div className="newsCard">
                                <div className="NewsJournalist">
                                    <img src={news.createdUserInfo.img} alt="" className="NewsJournalistIcon" />
                                    <span className="NewsJournalistName">{news.createdUserInfo.name}</span>
                                </div>
                                <Link to={`/newsDetail/${news.id}`}>
                                    <h3 className="NewsHead">{news.head}</h3>
                                    <div className="NewsTitle">{news.title}</div>
                                </Link>
                                <div className="NewsDate">
                                    <>
                                        {news.postedDate} · {news.read}
                                    </>
                                    <i class={news.isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"} id={news.id} onClick={() => iconHandler(news.id)}></i>
                                </div>
                            </div>
                            <img src={news.img} alt="" />
                        </div>
                    )
                })}
            </div>
        )
    }

}   