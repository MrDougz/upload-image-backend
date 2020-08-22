import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

import routes from './routes'
const app = express()

/**
 * Database Setup
 */
mongoose.connect('mongodb://localhost:27017/upload', {
  useNewUrlParser: true,
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(routes)

app.listen(3333)
