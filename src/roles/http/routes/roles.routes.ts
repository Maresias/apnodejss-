import { Router } from "express";
import { RoleRepository } from "../../repositories/RoleRepositores"
import { CreateRoleController } from "../../useCases/createRole/CreateRoleController";


const roulesRoutes = Router()
const roleRepository = new RoleRepository()
const createRoleController = new CreateRoleController()


roulesRoutes.post('/', (request, response)  =>{
    return createRoleController.handle(request, response)
})

roulesRoutes.get("/", (request, response) => {
    const roles = roleRepository.findAll()
    return response.json(roles)
})

export { roulesRoutes }