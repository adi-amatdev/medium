import { Context, Next } from "hono"
import { verify } from "hono/jwt"

export const checkToken = async ( c: Context , next: Next ) =>{
   try {
        const jwt: string = c.req.header("Authorization")?.split(" ")[1] || "";
        const response = await verify(jwt, c.env.JWT_SECRET);
        if(response.id){
            c.set('userId',response.id);
            await next();
        }else{
            c.status(403);
            return c.json({mesg:"bad token"});
        }
   } catch (error) {
        c.status(403);
        return c.json({mesg:"Unauthorized"});
    }
}