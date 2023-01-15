export default function Aside({ catList , catFilter}) {
    return (
        <aside>
            <h3 id="asideHeader">DISCOVER MORE OF WHAT MATTERS TO YOU</h3>
            <div id="catsOfNews">
                {
                    catList.map(a => {
                        return (
                            <span className="newsCat" onClick={() => catFilter(a.catName)}>{a.catName}</span>
                        )
                    })
                }
            </div>
            <footer>
                <a href="#">Help</a>
                <a href="#">Status</a>
                <a href="#">Writers</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">About</a>
                <a href="#">Text to speech</a>
            </footer>
        </aside >
    )
} 