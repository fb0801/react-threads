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
    const [text, setText] = useState("")

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

const postThread = async () => {
  const thread = {
    "timestamp": new Date(),
    "thread_from": user.user_uuid,
    "thread_to": user.user_uuid || null,
    "reply_to": interactingThread?.id || null,
    "text": text,
    "likes": []
  }

  try{
    const response = await fetch("http://localhost:3000/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
        body: JSON/stringify(thread)
    })
    const result = await response.json()
    console.log(result)
    getThreads()
    getReplies()
    setText("")
  } catch(error){

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

  const handleClick = () => {
    setPopUpFeedThreads(null)
    setInteractingThread(null)
    setOpenPopUp(true)
  }

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
        text={text}
        setText={setText}
        postThread={postThread}
    />}
    <div onClick={handleClick}>
      <writeIcon/>
    </div>
    </div>}
    
    </>
  );
}

export default App;
