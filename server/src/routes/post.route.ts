import { Router } from 'express';
import {createItem, deleteItem, getItem, getItemById} from '../controllers/post.controller';

const router = Router();

// Get all post and its by id
router.get("/", getItem);
router.get("/:id", getItemById);

router.post("/", createItem);

router.delete("/:id", deleteItem)




export default router;