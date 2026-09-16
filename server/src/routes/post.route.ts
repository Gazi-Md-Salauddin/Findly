import { Router } from 'express';
import {createItem} from '../controllers/post.controller';

const router = Router();

router.post("/", createItem)

export default router;