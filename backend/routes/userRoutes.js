import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router() //takes the place of the express.app in server.js

import User from '../models/User.js'

const secret = process.env.JWT_SECRET
const expiration = '24h'
router.post('/register', async (req, res) => {
  try {
    const saltRounds = 10

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    const user = await User.create({
      ...req.body,
      password: hashedPassword
    })

    const payload = { 
      username: user.username, 
      email: email, 
      _id: user._id 
    }
    const token = jwt.sign({ data: payload }, secret, {expiresIn: expiration } )

    res.status(201).json({ token, user })
  } catch (err) {
    console.log(err.message)
    res.status(400).json({ message: err.message })
  }


})

