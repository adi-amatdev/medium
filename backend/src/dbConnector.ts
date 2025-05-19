import { PrismaClient } from "./generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";


//need to add zod validation

export const prismaInit = (dbUrl:string) =>{
    return new PrismaClient({
        datasourceUrl: dbUrl,
    }).$extends(withAccelerate());

}