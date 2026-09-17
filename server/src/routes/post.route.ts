import { Router } from 'express';
import {createItem, getItem} from '../controllers/post.controller';

const router = Router();

router.post("/", createItem);
router.get("/", getItem);

export default router;