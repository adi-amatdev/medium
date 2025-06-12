import { Context } from "hono";
import { prismaInit } from "../dbConnector";
import { signupSchema, signinSchema } from "@adi-amatdev/medium-common";
import { sign } from "hono/jwt";

//password hashing
export const signupService =  async (c: Context) =>{
    const prisma = prismaInit(c.env.DATABASE_URL);
    try {
        const body = await c.req.json();
        const {success, data} = signupSchema.safeParse(body);
        if(!success){
            c.status(411);
            return c.json({message:"Incorrect inputs"});
        }
        const user = await prisma.user.create({
            data:{
                email: data.email,
                name: data.name,
                password: data.password
            }
        });
        const jwt = await sign({id: user.id},c.env.JWT_SECRET);
        
        c.status(200);
        return c.json(jwt);

    } catch (error) {
        console.log(error);
        c.status(400);
        return c.json({mesg:"Invalid"});
    }finally{
        await prisma.$disconnect();
    }
}

export const signinService = async (c: Context) =>{
    const prisma = prismaInit(c.env.DATABASE_URL);
    try {
        const body = await c.req.json();
        const {success, data} = signinSchema.safeParse(body);
        if(!success){
            c.status(411);
            return c.json({message:"Incorrect inputs"});
        }
        const user = await prisma.user.findUnique({
            where:{
                email: data.email
            }
        });
        if(!user){
            c.status(403);
            return c.json({mesg:"user not found"});
        }
        const jwt = await sign({id:user.id},c.env.JWT_SECRET);
        c.status(200);
        return c.json(jwt);
    } catch (error) {
        c.json(404);
        return c.json({mesg:"unable to login"})
    }finally{
        await prisma.$disconnect();
    }
}