import { RoleRepository } from "../../repositories/RoleRepositores"
import { CreateRoleUseCase } from "./CreateRoleUseCase";
import { CreateRoleController } from "./CreateRoleController";  

const roleRepository = RoleRepository.getInstance()
const createRoleUseCase = new CreateRoleUseCase(roleRepository)
const createRoleController = new CreateRoleController(createRoleUseCase)

export { createRoleController }