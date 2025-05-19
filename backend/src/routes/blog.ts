import { Hono } from "hono";
import { checkToken } from "../middleware/auth";
import { prismaInit } from "../dbConnector";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string
    },
    Variables:{
        userId: string
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
                authorId: c.get("userId")
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

//declared first to avoid engine confusion between /:id and /bulk

//pagination
blogRouter.get("/bulk",async c =>{
    const prisma = prismaInit(c.env.DATABASE_URL);
    try {
        const blogs = await prisma.blog.findMany();
        c.status(200);
        return c.json({blogs});
    } catch (error) {
        c.status(404);
        return c.json({message:"unable to fetch all blog posts"});
    }
});

blogRouter.get("/:id",async c =>{
    const prisma = prismaInit(c.env.DATABASE_URL);
    try {
        const id = c.req.param("id");
        const blog = await prisma.blog.findFirst({
            where:{
                id: id
            }
        });
        c.status(200);
        return c.json({blog});
    } catch (error) {
        c.status(404);
        return c.json({message:"unable to fetch blog"})
    }finally{
        prisma.$disconnect();
    }
});

