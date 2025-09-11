import { Role } from "../../entities/Role";
import { RoleRepository } from "@roles/repositories/RoleRepositores";

export class ListRolesUseCase {
    constructor(private roleRepository: RoleRepository){}


    execute():Role[]{
        const roles = this.roleRepository.findAll()

        return roles
    }
}