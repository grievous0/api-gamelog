import express from 'express'
import { gamesController } from './controllers/gamesController'

const router = express.Router()

router.get('/', gamesController.live)

router.get('/games', gamesController.index)
router.post('/games', gamesController.save)
router.get('/games/:id', gamesController.show)
router.put('/games/:id', gamesController.update)
router.delete('/games/:id', gamesController.delete)

export { router }