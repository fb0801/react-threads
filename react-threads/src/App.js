import {useState, useEffect} from 'react'
import Nav from './Componenets/Nav'
import Header from './Componenets/Header'
import Feed from './Componenets/Feed'
import PopUp from './Componenets/PopUp'
import writeIcon from './Componenets/WriteIcon'

const App = () => {
    const userID = ""
    const [user, setUser] = useState(null)
    const [threads, SetThreads] = useState(null)
    const [viewThreadsFeed, setViewThreadFeed] = useState(True)
    const [filteredThreads, setFilteredThreads] = useState(null)
    const [openPopUp, setOpenPopUp] = useState(false)    
    const [interactingThread, setInteractingThread] =useState(null)
    const [popUpFeedThreads, setPopUpFeedThreads] = useState(null)

    const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users?user_uuid=${}`)
      const data = await response.json()
      setUser(data[0])
    } catch (error) {
      console.error(error)
    }
  }
  
  const getThreads = async () => {
      try {
        const response = await fetch(`http://localhost:3000/threads?thread_from=${userId}`)
        const data = await response.json()
        setUser(data[0])
      } catch (error) {
        console.error(error)
      }
  }

  const getThreadsFeed = () => {
    if (viewThreadsFeed) {
      const standAloneThreads = threads?.filter(thread => thread.reply_to === null)
      setFilteredThreads(standAloneThreads)
    }
    if (!viewThreadsFeed) {
      const replyThreads = threads?.filter(thread => thread.reply_to!== null)
      setFilteredThreads(replyThreads)
    }

  }

  const getReplies = async () => {
    try{
    const response = await fetch(`http://localhost:3000/threads?reply_to=${interactingThread?.id}`)
    const data = await response.json()
    setPopUpFeedThreads(data)
  } catch(error){
    console.error(error)
  }
}

useEffect(() => {
  getReplies()
}, [interactingThread])

  useEffect(() => {
    getUser()
    getThreads()
  }, [])

  useEffect(() => {
    getThreadsFeed
  }, [user, threads, viewThreadsFeed])

  return (
    <>
    {user && <div className="app">
    <Nav url={user.instagram_url}/>
    <Header
      user={user}
      viewThreadsFeed= {viewThreadsFeed}
      setViewThreadFeed ={setViewThreadFeed}
      />
    <Feed
    user={user}
    setOpenPopUp={setOpenPopUp}
    filteredThreads={filteredThreads}
    getThreads={getThreads}
    setInteractingThread={setInteractingThread}
    
    />
    {openPopUp &&
    <PopUp
        user = {user}
        setOpenPopUp={setOpenPopUp}
        popUpFeedThreads={popUpFeedThreads}
    />}
    <div onClick={() => setOpenPopUp(true)}>
      <writeIcon/>
    </div>

    </div>}
    
    </>
  );
}

export default App;
