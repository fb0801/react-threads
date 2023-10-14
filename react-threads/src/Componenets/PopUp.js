import React from 'react'
import PopUpThread from './PopUpThread'


const PopUp = ({user ,setOpenPopUp, popUpFeedThreads, text, setText, postThread}) => {
  return (
    <div className='popup'>
      <p onClick={() => setOpenPopUp(false)}>X</p>
      {popUpFeedThreads?.map(popUpFeedThreads =>
      <PopUpThread
       
        key = {popUpFeedThreads.id}
        popUpFeedThreads={popUpFeedThreads}
      />
      )}
      <ThreadInput
      user={user}
      text={text}
      setText={setText}
      postThread={postThread}
      />
    </div>
  )
}

export default PopUp 
