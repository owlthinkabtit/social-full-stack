import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { userClient } from "../clients/api"
import { useUser } from "../context/UserContext"

function Login() {
  const { setUser } = useUser()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm( {
      ...form, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await userClient.post('/login', form)

      localStorage.setItem("token", data.token)

      setUser(data.user)
      navigate("/feed")
    } catch(err) {
      console.dir(err)
      alert(err.response.data.message)
    }
  }

  return (
    <div>
     <h1>Login Page</h1>
     <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        value={form.email}
        onChange={handleChange}
        id="email"
        name="email"
        type="email"
        required
      />

      <label htmlFor="password">Password:</label>
      <input 
        value={form.password}
        onChange={handleChange}
        id="password"
        name="password"
        type="password"
        required
      />
      <button>Login</button>
     </form>
    </div>
  )
}

export default Login