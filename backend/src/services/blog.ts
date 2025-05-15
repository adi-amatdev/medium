import { Hono } from "hono";
import { checkToken } from "../middleware/auth";

export const blog = new Hono();

blog.use("/*",checkToken);

blog.post("/", c =>{
    return c.json({});
});

blog.put("/", c =>{
    return c.json({});
});

blog.get("/:id",c =>{
    return c.text("hello world");
});

blog.get("/bulk",c =>{
    return c.json({});
});