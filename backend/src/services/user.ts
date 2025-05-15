import { Hono } from "hono";
import { prismaInit } from "../dbConnector";
import { sign } from "hono/jwt";

export const user = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET: string
    }
}>();

user.post("/signup", async c =>{
    const prisma = prismaInit(c.env.DATABASE_URL);
    const body = await c.req.json();
    try {
        const user = await prisma.user.create({
            data:{
                email: body.email,
                name: body.name,
                password: body.password
            }
        });
        const jwt = await sign({id: user.id},c.env.JWT_SECRET);
        
        c.status(200)
        return c.json({token:jwt});

    } catch (error) {
        console.log(error);
        c.status(403);
        return c.json({mesg:"Error while signing up "});
    }
});

user.post("/signin", async c =>{
    try {
        const prisma = prismaInit(c.env.DATABASE_URL);
        const {email , password} = await c.req.json();
        const user = await prisma.user.findUnique({
            where:{
                email: email
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
        c.json(403);
        return c.json({mesg:"unable to login"})
    }
});

