import { Hono } from "hono";
import { checkToken } from "../middleware/auth";
import { blogBulkFetchService, blogCreateService, blogFetchService, blogUpdateService } from "../services/blog";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string
    },
    Variables:{
        userId: string
    }
}>();

blogRouter.use("/*",checkToken);

blogRouter.post("/",blogCreateService);
blogRouter.put("/",blogUpdateService);
//declared first to avoid engine confusion between /:id and /bulk
blogRouter.get("/bulk",blogBulkFetchService);
blogRouter.get("/:id",blogFetchService);

