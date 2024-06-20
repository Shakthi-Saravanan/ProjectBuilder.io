import React from 'react'
import '../Assets/style/headbar.css'

function Headbar(){
  return (
    <nav>
        <div>
            <a href="">
                LOGO
            </a>
        </div>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="">QUERY</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/UserProfile">USER PROFILE</a></li>
      </ul> 
    </nav>
  )
}

export default Headbar
