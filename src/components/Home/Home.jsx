import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className='header'>
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <div className="menuList">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className='content'>
      <h1 className="homeTitle">
          Happiness & <br/> <span>Mindfulness Courses</span>
        </h1>
        <p>
          Sample text. Click to select the textbox. Click again or double click <br />
          to start editing the text.
        </p>
        <button className='btn'><a href="#">LEARN MORE</a></button>
      </div>
    </div>
  )
}

export default Home