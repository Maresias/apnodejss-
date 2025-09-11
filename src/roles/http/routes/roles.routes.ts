import { Router } from "express";
import { createRoleController } from "../../useCases/createRole";
import { listRolesController } from "@roles/useCases/listRoles";

const roulesRoutes = Router()


roulesRoutes.post('/', (request, response)  =>{

    return createRoleController.handle(request, response)
})

roulesRoutes.get("/", (request, response) => {
    const roles = listRolesController.handles(request, response)
    
    return response.json(roles)
})

export { roulesRoutes }