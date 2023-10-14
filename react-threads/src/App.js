import {useState, useEffect} from 'react'
import Nav from './Componenets/Nav'
import Header from './Componenets/Header'
import Feed from './Componenets/Feed'
import PopUp from './Componenets/PopUp'

const App = () => {
    const userID = ""
    const [user, setUser] = useState(null)
    const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users?user_uuid=${}`)
      const data = await response.json()
      setUser(data[0])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
    {user && <div className="app">
    <Nav url={user.instagram_url}/>
    <Header
    user={user}
    />
    <Feed/>
    <PopUp/>
    </div>
    </>
  );
}

export default App;
