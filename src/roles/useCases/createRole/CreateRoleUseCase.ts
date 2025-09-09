import { Role } from "../../entities/Role"; 
import { RoleRepository } from "@roles/repositories/RoleRepositores";
import { AppError } from "@shared/errors/app-error";

type CreateRoleUseCaseDTO = {
    name: string;
}

export class CreateRoleUseCase{
    constructor (private roleRepository:RoleRepository){

    }

    execute({name } : CreateRoleUseCaseDTO): Role{
        const alreadyRoleExists = this.roleRepository.findByName(name)

        if (alreadyRoleExists){
            throw new AppError("Role already exists!", 400)
        }

        return this.roleRepository.create({name})
    }
}