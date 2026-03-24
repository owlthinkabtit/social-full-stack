import express from 'express';
import 'dotenv/config'
import './config/connection.js'
import userRoutes from './routes/userRoutes.js'
import postsRoutes from './routes/postsRoutes.js'

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api/posts', postsRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Listening on port: http://localhost:${port}`))