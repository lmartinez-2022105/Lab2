'use strict'

import express from "express"
import { addAnimal, allAnimal, deleteAnimal, updateAnimal } from "./animal.controller.js"

const api = express.Router()

api.post('/add', addAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.delete('/deleteAnimal/:id', deleteAnimal)
api.get('/allAnimal',allAnimal)

export default api