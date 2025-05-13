import { Hono } from 'hono'
import { router as medium } from './routes';

const app = new Hono()

app.route("/api/v1",medium);


export default app
