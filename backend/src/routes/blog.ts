import { Hono } from "hono";

export const blog = new Hono();

blog.post("/", c =>{

});

blog.put("/", c =>{

});

blog.get("/:id",c =>{
    return c.text("hello world");
});

blog.get("/bulk",c =>{

});