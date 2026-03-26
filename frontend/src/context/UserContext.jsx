import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { token, userClient } from "../clients/api"

const UserContext = createContext(null)

function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function getUser() {
      try{
        if (!token()) return
  
        const { data } = await userClient.get('/')
        
        setUser(data)

      }catch (err) {
        console.log(err)
        logout()
      }
    }

    getUser()
  }, [])

  const logout = () => {
    setUser(null)

    localStorage.removeItem("token")

    navigate('/login')
  }

  const value = {
    user,
    setUser,
    logout
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}

export default UserProvider