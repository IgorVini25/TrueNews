import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import { errors } from './middlewares/errors'

import dotenv from 'dotenv'
dotenv.config()

import './database'
import { router } from './routes'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.use(errors)

app.listen(3333, () => console.log('Server running at http://localhost:3333'))
