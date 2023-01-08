export default function NewsCards({ news, usersdata }) {
    news.map(a => {
        usersdata.map(b => {
            if (a.createdUserId == b.id) {
                a.createdUserInfo = b;
            }
        })
    })
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
                            <h3 className="NewsHead">{news.head}</h3>
                            <div className="NewsTitle">{news.title}</div>
                            <div className="NewsDate">{news.postedDate} · {news.read}</div>
                        </div>
                        <img src={news.img} alt="" />
                    </div>
                )
            })}
        </div>
    )
}   