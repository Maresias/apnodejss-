import { RoleRepository } from "../../repositories/RoleRepositores";
import { ListRolesUseCase } from "./ListRolesUseCase";
import { ListRolesController } from "./ListRolesController";

const roleRepository = RoleRepository.getInstance()
const listRolesUseCase = new ListRolesUseCase(roleRepository)
const listRolesController = new ListRolesController(listRolesUseCase)


export { listRolesController }