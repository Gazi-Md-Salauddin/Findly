import { type Request, type Response } from 'express';
import { createItemService } from '../services/post.service';

export const createItem = async (req: Request, res: Response) => 
    {
    try{
        const itemData = req.body;
        const result = await createItemService(itemData);

        res.status(201).json({
            success: true,
            message: "Post created successfully",
            data: result,
        });
    }catch(error) {
        res.status(500).json({
            success: false,
            message: "Failed to create post",
        });
    }
};