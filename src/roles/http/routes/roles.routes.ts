import { Router } from "express";
import { RoleRepository } from "../../repositories/RoleRepositores"


const roulesRoutes = Router()
const roleRepository = new RoleRepository()


roulesRoutes.post('/', (request, response)  =>{
    const { name } = request.body
    
    const roleAleadyExists = roleRepository.findByName(name)

    if (roleAleadyExists){
        return response.status(400).json({ message: "Role aleady exists!"})
    }
    const role = roleRepository.create({ name})

    return response.status(201).json(role)
})

roulesRoutes.get("/", (request, response) => {
    const roles = roleRepository.findAll()
    return response.json(roles)
})

export { roulesRoutes }