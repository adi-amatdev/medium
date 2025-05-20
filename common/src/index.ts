import z from "zod";

export const signupSchema = z.strictObject({
    email : z.string().email(),
    name: z.string().min(3),
    password: z.string().min(6)
});

export const signinSchema = z.strictObject({
    email: z.string().email(),  
    password:z.string().min(6),
});

export const blogSchema = z.strictObject({
    title: z.string().min(3),
    content: z.string().min(10),    
});

export const blogUpdateSchema = z.strictObject({
    id: z.string(),
    title: z.string().min(3),
    content: z.string().min(10),    
});

export type signupTypes = z.infer<typeof signupSchema>;
export type signinTypes = z.infer<typeof signinSchema>;
export type blogTypes = z.infer<typeof blogSchema>;
export type blogUpdateTypes = z.infer<typeof blogUpdateSchema>;


/*
    note : use npm login and npm publish with @username/repo-name
           before that add src to a .npmignore file and make sure declaration 
           file is generated and code is transpiled to js
*/