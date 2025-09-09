import { RoleRepository } from "../../repositories/RoleRepositores"
import { CreateRoleUseCase } from "./CreateRoleUseCase";
import { CreateRoleController } from "./CreateRoleController";  

const roleRepository = new RoleRepository()
const createRoleUseCase = new CreateRoleUseCase(roleRepository)
const createRoleController = new CreateRoleController(createRoleUseCase)

export { createRoleController }