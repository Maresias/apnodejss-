import { response, Router } from "express";
const { v4: uuidv4 } = require('uuid');
const roulesRoutes = Router()

const roles = []

roulesRoutes.post('/', (request, response)  =>{
    const { name } = request.body

    const role = {
        id: uuidv4(),
        name,
        created_at: new Date()
    }

    roles.push(role)

    return response.status(201).json(role)
})

export { roulesRoutes }