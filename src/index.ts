import 'dotenv/config'

import express from 'express'

import { Router } from 'router'

const app = express()

app.use(Router)

const { PORT } = process.env

app.listen(
  Number(PORT),
  () => console.info(`Server is running on port ${PORT} 🚀!`)
)
