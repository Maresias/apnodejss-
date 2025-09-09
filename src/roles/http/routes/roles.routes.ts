import { Router } from "express";
import { RoleRepository } from "../../repositories/RoleRepositores"
import { createRoleController } from "../../useCases/createRole";

const roulesRoutes = Router()
const roleRepository = new RoleRepository()


roulesRoutes.post('/', (request, response)  =>{

    return createRoleController.handle(request, response)
})

roulesRoutes.get("/", (request, response) => {
    const roles = roleRepository.findAll()
    return response.json(roles)
})

export { roulesRoutes }