import { Request, Response } from "express";
import { ListRolesUseCase } from "./ListRolesUseCase";

export class ListRolesController {
    constructor(private listRolesUseCase: ListRolesUseCase){}

    handles(request:Request, response:Response):Response{
        
        const roles = this.listRolesUseCase.execute()
        return response.json(roles)
    }
}