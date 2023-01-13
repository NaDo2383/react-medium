export default function Trending({ data, usersdata }) {
    let trendingNews = [];

    data.map(para => {
        if (para.isTrending === true) {
            return trendingNews.push(para)
        }
    })

    trendingNews.map(a => {
        usersdata.map(b => {
            if (a.createdUserId === b.id) {
                return a.createdUserInfo = { ...b }
            }
        })
    })

    return (
        <div id="trendingContainerBig">
            <div id="trendingContainer">
                <div id="trendingHeader">
                    <img src={require("../pic/trendingIcon.png")} alt="" />
                    <h4 id="trendingHeaderText">TRENDING ON MEDIUM</h4>
                </div>
                <div id="trendingNewsCards">
                    {
                        trendingNews.map((e, index) => {
                            return (
                                <div className="trendingNewsCardContainer">
                                    <div className="trendingNewsCardNumber">{"0" + (index + 1)}</div>
                                    <div className="trendingNewsCard">
                                        <div className="trendingNewsJournalist">
                                            <img src={e.createdUserInfo.img} alt="" className="trendingNewsJournalistIcon" />
                                            <span className="trendingNewsJournalistname">{e.createdUserInfo.name}</span>
                                        </div>
                                        <h3 className="trendingNewsTitle">{e.head}</h3>
                                        <div className="trendingNewsDate">{e.postedDate} · {e.read}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
} 