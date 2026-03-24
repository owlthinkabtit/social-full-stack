import express from 'express';
import 'dotenv/config'
import './config/connection.js'
import userRoutes from './routes/userRoutes.js'

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Listening on port: http://localhost:${port}`))