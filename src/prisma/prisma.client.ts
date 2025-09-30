import { PrismaClient } from "@prisma/client";

import { log } from 'console';

class PrismaService extends PrismaClient {
    constructor(){
        super({
            log: ["warn", "error"],
        })
    }

    async connect(){
        return this.$connect()
    }

    async disconnect(){
        return this.$disconnect() 
    }
}


export const prisma = new PrismaService()