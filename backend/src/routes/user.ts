import { Hono } from "hono";
import { signinService, signupService } from "../services/user";

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET: string
    }
}>();

userRouter.post("/signup",signupService);
userRouter.post("/signin", signinService);

