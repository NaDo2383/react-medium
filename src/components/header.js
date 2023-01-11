import { useState } from "react";

export default function Header({ menu1 }) {

    const [navBGColor, setNavBGColor] = useState(false)

    function changeNavBackgroundColor() {
        if (window.scrollY >= 540) {
            setNavBGColor(true)
        } else {
            setNavBGColor(false)
        }
    }

    function SignIn() {

    }

    window.addEventListener("scroll", changeNavBackgroundColor);

    return (
        <nav id={navBGColor ? "navWhite" : "navOrange"}>
            <div id="headerContainer">
                <img src={require("../pic/logo1.png")} alt="" width="169px" />
                <div id="menus">
                    {menu1.map((e) => {
                        if (e == "Sign in") {
                            return (<span className="menu" onClick={SignIn} id="1">{e}</span>)
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