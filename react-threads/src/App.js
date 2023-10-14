import {useState, useEffect} from 'react'
import Nav from './Componenets/Nav'
import Header from './Componenets/Header'
import Feed from './Componenets/Feed'
import PopUp from './Componenets/PopUp'

const App = () => {
    const userID = ""
    const [user, setUser] = useState(null)
    const [threads, SetThreads] = useState(null)
    const [viewThreadsFeed, setViewThreadFeed] = useState(True)
    const [filteredThreads, setFilteredThreads] = useState(null)    

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
    <Feed/>
    <PopUp/>
    </div>}
    </>
  );
}

export default App;
