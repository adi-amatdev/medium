import { Hono } from "hono";
import { checkToken } from "../middleware/auth";
import { prismaInit } from "../dbConnector";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string
    }
}>();

blogRouter.use("/*",checkToken);

blogRouter.post("/",async c =>{
    const prisma = prismaInit(c.env.DATABASE_URL);
    try {
        const body = await c.req.json();
        const blog = await prisma.blog.create({
            data:{
                title: body.title,
                content: body.content,
                authorId:""
            }
        });
        return c.json({id : blog.id});

    } catch (error) {
        c.status(403)
        return c.json({mesg:"unable to create blog"})
    }finally{
        await prisma.$disconnect();
    }
});

blogRouter.put("/",async c =>{
    const prisma = prismaInit(c.env.DATABASE_URL);
    try {
        const body = await c.req.json();
        const blog = await prisma.blog.update({
            where:{
                id: body.id 
            },
            data:{
                title: body.title,
                content: body.content,
            }
        });
        return c.json({id : blog.id});

    } catch (error) {
        c.status(403)
        return c.json({mesg:"unable to update blog"})
    }finally{
        await prisma.$disconnect();
    }
});

blogRouter.get("/:id",c =>{
    return c.text("hello world");
});

blogRouter.get("/bulk",c =>{
    return c.json({});
});