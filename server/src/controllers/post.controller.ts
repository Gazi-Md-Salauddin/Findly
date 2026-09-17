import { type Request, type Response } from 'express';
import { createItemService, getItemService } from '../services/post.service';

export const createItem = async (req: Request, res: Response) => {
    try {
        const itemData = req.body;
        const result = await createItemService(itemData);

        res.status(201).json({
            success: true,
            message: "Post created successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create post",
        });
    }
};


export const getItem = async (req: Request, res: Response) => {
    try {
        const items = await getItemService();
        res.status(200).json({
            success: true,
            message: "Posts retrieved successfully",
            data: items,
        });
    } catch {
        res.json(500).json({
            success: false,
            message: "Failed to retrieve posts",
        });
    }
}