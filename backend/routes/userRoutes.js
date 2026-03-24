import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router() //takes the place of the express.app in server.js

import User from '../models/User.js'

router.post('/register', async (req, res) => {
  try {
    const saltRounds = 10

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    const user = await User.create({
      ...req.body,
      password: hashedPassword
    })
    
  } catch(err) {

  }
  
  
})

