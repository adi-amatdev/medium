import { Hono } from 'hono'
import { router as mediumRouter } from './routes';

const app = new Hono()

app.route("/api/v1",mediumRouter);


export default app
