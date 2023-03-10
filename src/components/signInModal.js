import { useState } from "react"

export default function Modal ({ setModal , modal, checkUserNamePassword, wrongPass}) {

    const [userName, setUserName] = useState ("")
    const [userPass, setUserPass] = useState ("")
    
    let style = {display: modal? "block":"none"}
    let style1 = {display: wrongPass? "block":"none"}

    return(
        <div className="signInModal" style={style} onClick={setModal}>
            <div className="signInModalBody" onClick={(e) => e.stopPropagation()}>
                <h1 className="signInModalHeade">Welcome Back</h1>
                <p className="wrongPass" style={style1}>Your username or password is wrong</p>
                <div id="modalUsernameContainer" className="modalInputContainer">
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder="Enter your username" 
                        id="userNameInput"
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}>
                    </input>
                </div>
                <div id="modalPasswordContainer" className="modalInputContainer">
                    <label>Password</label>
                    <input  
                        type="password" 
                        placeholder="Enter your password" 
                        id="passwordInput"
                        onChange={(a) => setUserPass(a.target.value)}
                        value={userPass}>
                    </input>
                </div>
                <div id="modalBtnsContainer">
                    <button className="modalBtn" onClick={()=>checkUserNamePassword(userName,userPass)}>Sign in</button>
                    <button className="modalBtn" onClick={setModal}>Close</button>
                </div>
            </div>
        </div>          
    )
}