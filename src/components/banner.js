export default function Banner({user}) {
    if(!user){
        return (
            <section id="bannerSection">
                <div id="bannerContainer">
                    <div id="bannerText">
                        <h1 id="bannerHeader">Stay curious</h1>
                        <p id="bannerTextBody">
                            Discover stories, thinking, and expertise from writers on any topic.
                        </p>
                        <span id="bannerBtn">Start reading</span>
                    </div>
                </div>
            </section>
        )
        
    }else{
        return null
    }
    
}