import { Context } from "hono";
import { blogSchema,blogUpdateSchema } from "@adi-amatdev/medium-common";
import { prismaInit } from "../dbConnector";


export const blogCreateService = async (c: Context) =>{
    const prisma = prismaInit(c.env.DATABASE_URL);
    
    try {
        const body = await c.req.json();
        const {success, data} = blogSchema.safeParse(body);
        if(!success){
            c.status(411);
            return c.json({message:"Incorrect inputs"});
        }
        const blog = await prisma.blog.create({
            data:{
                title: data.title,
                content: data.content,
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
}

export const blogUpdateService = async (c:Context) =>{
    const prisma = prismaInit(c.env.DATABASE_URL);
    try {
        const body = await c.req.json();
        const {success,data} = blogUpdateSchema.safeParse(body);
        if(!success){
            c.status(411);
            return c.json({message:"Incorrect inputs"});
        }
        const blog = await prisma.blog.update({
            where:{
                id: data.id 
            },
            data:{
                title: data.title,
                content: data.content,
            }
        });
        return c.json({id : blog.id});

    } catch (error) {
        c.status(403)
        return c.json({mesg:"unable to update blog"})
    }finally{
        await prisma.$disconnect();
    }
}


//pagination
export const blogBulkFetchService = async (c:Context) =>{
    const prisma = prismaInit(c.env.DATABASE_URL);
    try {
        const blogs = await prisma.blog.findMany();
        c.status(200);
        return c.json({blogs});
    } catch (error) {
        c.status(404);
        return c.json({message:"unable to fetch all blog posts"});
    }
}

export const blogFetchService = async (c:Context) =>{
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
}