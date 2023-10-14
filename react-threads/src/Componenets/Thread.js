import React from 'react'
import moment from 'moment'
import {useEffect, useState} from 'react'

const Thread = ({user, setOpenPopUp,filteredThread}) => {

  const timePassed = moment().startOf('day').fromNow(filteredThread.timestamp)

  const handleClick = () => {
    setOpenPopUp(true)
  }


  return (
    <article className='feed-card'>
      <div classname="text-container">
        <div>
        <div className='img-container'>

          <img src={user.img} alt="profile avater"/>

        </div>
            <div >
                <p><strong>{user.handle}</strong></p>
                <p>{filteredThread.text}</p>
            </div>
      </div>
      <p className='sub-text'>{timePassed}</p>
      </div>
      <div className='icons'>
      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
      <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.213 10 7.162 0 4-3.032 7.411-7.873 9.321l.423-2.179-2.444.019c-5.661.025-10.106-3.237-10.106-7.161 0-3.949 4.486-7.162 10-7.162zm0-2c-6.627 0-12 4.102-12 9.162 0 5.249 5.684 9.236 12.121 9.161-.391 2.015-2.765 3.275-4.545 3.677 10.109-.89 16.424-6.489 16.424-12.838 0-5.06-5.373-9.162-12-9.162z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
      </div>
      <p className='sub-text'><span onClick={handleClick}> replies</span> • <span>{filteredThread.likes.length}</span></p>
    </article>
  )
}

export default Thread
