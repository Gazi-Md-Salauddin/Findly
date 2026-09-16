import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

import postRoutes from './routes/post.route';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/posts", postRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Findly server is running fine')
})

export default app;