import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='info-container'>
            <div className='user-info-container'>
                <h1>username</h1>
                <p>handle <span className='threads-info'>threads.net</span></p>
            </div>
            <div className='img-container'>
              <img src="" alt='profile image'/>
            </div>
        </div>
        <p>bio</p>
        <div className='sub-info-container'>
          <p className='sub-text'>x followers • <a href="">link</a></p>
        </div>
        <button className='primary' onClick={() =>
        navigator.clipboard.writeText('')}>
          share profile</button>
          <div className='button-container'>
            <button>Threads</button>
            <button>Replies</button>
          </div>
    </header>
  )
}

export default Header
