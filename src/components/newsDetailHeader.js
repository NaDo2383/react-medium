import React from 'react'

export default function NewsDetailHeader() {
  return (
    <div id='NewsDetailHeader'>
        <div id="logoAndSearch">
            <i id='mediumLogo' class="fa-brands fa-medium"></i>
            <div id='newsDetailHeaderSearch'>
                <i  id='searchInputIcon' class="fa-solid fa-magnifying-glass"></i>
                <input id='searchInput' type="search" placeholder='Search Medium'></input>
            </div>
        </div>
        <div id='signingSection'>
            <div id='writeSection'>
                <i class="fa-solid fa-pen-to-square"></i>
                <span>Write</span>
            </div>
            <div id='NewsDetailHeaderBtns'>
                <span id='signUpBtn'>Sign up</span>
                <span id='signInBtn'>Sign in</span>
            </div>
            <div id='profile'>
                <i class="fa-regular fa-user"></i>
                <i class="fa-solid fa-angle-down"></i>
            </div>
        </div>
    </div>
  )
}
