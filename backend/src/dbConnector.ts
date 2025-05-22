import { PrismaClient } from "./generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prismaInit = (dbUrl:string) =>{
    return new PrismaClient({
        datasourceUrl: dbUrl,
    }).$extends(withAccelerate());

}