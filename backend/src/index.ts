import { Hono } from 'hono'
import { router as mediumRouter } from './routes';
import { cors } from 'hono/cors';
const app = new Hono()

app.use('/*',cors());
app.route("/api/v1",mediumRouter);


export default app
