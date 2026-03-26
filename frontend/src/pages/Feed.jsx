import { useEffect } from "react"
import { postClient } from "../clients/api"


function Feed() {
  useEffect(() => {
    async function getData() {
      try {
        const response = await postClient.get('/')
        console.log(response.data)
      } catch(err) {
        console.log(err.response.data)
      }
    }
    getData()
  }, [])

  return (
    <div>
      Feed Page
    </div>
  )
}

export default Feed