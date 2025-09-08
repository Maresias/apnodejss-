import { Request, Response } from "express";
import { RoleRepository } from "@roles/repositories/RoleRepositores";
import { AppError } from "@shared/errors/app-error";

export class CreateRoleController {
    

    handle(request:Request, response:Response):Response {
        const roleRepository = new RoleRepository()
        const { name } = request.body
        const alreadyRoleExists = roleRepository.findByName(name)

        if (alreadyRoleExists){
            throw new AppError("Role already exists!", 400)
        }

        const role = roleRepository.create({ name })
        return response.status(201).json(role)
    }
    
}