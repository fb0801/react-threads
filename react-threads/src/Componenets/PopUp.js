import React from 'react'
import PopUpThread from './PopUpThread'


const PopUp = ({user, setOpenPopUp}) => {
  return (
    <div className='popup'>
      <p onClick={() => setOpenPopUp(false)}>X</p>
      <PopUpThread/>
      <ThreadInput/>
    </div>
  )
}

export default PopUp 
