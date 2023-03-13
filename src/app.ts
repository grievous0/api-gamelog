import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { Games } from './models/games'

const PORT = process.env.PORT || 3000
const app = express()
const router = express.Router()

router.get('/', (req, res) => res.json({ message: 'Hello World' }))

router.get('/games', async (req, res) => {
    const games = await Games.findAll()
    return res.json(games)
})

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})