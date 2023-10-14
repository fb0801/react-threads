import React from 'react'
import PopUpThread from './PopUpThread'


const PopUp = ({setOpenPopUp, popUpFeedThreads}) => {
  return (
    <div className='popup'>
      <p onClick={() => setOpenPopUp(false)}>X</p>
      {popUpFeedThreads?.map(popUpFeedThreads =>
      <PopUpThread
       
        key = {popUpFeedThreads.id}
        popUpFeedThreads={popUpFeedThreads}
      />
      )}
      <ThreadInput/>
    </div>
  )
}

export default PopUp 
