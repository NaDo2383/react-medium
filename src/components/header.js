import { useState } from "react";


export default function Header({ menu1, modalHandler, user, setUser }) {

    const [navBGColor, setNavBGColor] = useState(false);


    function changeNavBackgroundColor() {
        if (!user) {
            if (window.scrollY >= 540) {
                setNavBGColor(true)
            } else {
                setNavBGColor(false)
            }
        } else {
            if (window.scrollY >= 90) {
                setNavBGColor(true)
            } else {
                setNavBGColor(false)
            }
        }

    }

    window.addEventListener("scroll", changeNavBackgroundColor);

    if (!user) {
        return (
            <nav id={navBGColor ? "navWhite" : "navOrange"}>
                <div id="headerContainer">
                    <img src={require("../pic/logo1.png")} alt="" width="169px" />
                    <div id="menus">
                        {menu1.map((e) => {
                            if (e === "Sign in") {
                                return (
                                    <span className="menu" onClick={modalHandler}>{e}</span>
                                )
                            } else {
                                return (
                                    <span className="menu">{e}</span>
                                )
                            }
                        })}
                        <span id={navBGColor ? "getStartedGreen" : "getStartedOrange"}>Get started</span>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav id={navBGColor ? "navWhite" : "navOrange"}>
                <div id="headerContainer">
                    <img src={require("../pic/logo1.png")} alt="" width="169px" />
                    <div id="menus">
                        {menu1.map((e) => {
                            if (e === "Sign in") {
                                return (
                                    <span className="menu" onClick={() => setUser()}>Log Out! {user}</span>
                                )
                            } else {
                                return (
                                    <span className="menu">{e}</span>
                                )
                            }
                        })}
                        <span id={navBGColor ? "getStartedGreen" : "getStartedOrange"}>Get started</span>
                    </div>
                </div>
            </nav>
        )
    }


}