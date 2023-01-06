export default function Header({ menu1 }) {
    return (
        <nav>
            <div id="headerContainer">
                <img src={require("../pic/logo.png")} alt="" />
                <div id="menus">
                    {menu1.map((e) => {
                        return (
                            <span className="menu">{e}</span>
                        )
                    })}
                    <span id="getStarted">Get started</span>
                </div>
            </div>
        </nav>
    )

}