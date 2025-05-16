import { Hono } from "hono";
import { userRouter } from "./user";
import { blogRouter } from "./blog";

export const router = new Hono();

router.route("/user",userRouter);
router.route("/blog",blogRouter);


