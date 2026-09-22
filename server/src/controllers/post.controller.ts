import { type Request, type Response } from 'express';
import { createItemService, getItemByIdService, getItemService } from '../services/post.service';

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

//  Get item api
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

// Get item api by id
export const getItemById = async (req: Request<{id: string}>, res: Response) => {
    try {
        const { id } = req.params;
        const post = await getItemByIdService(id)

        if(!post) {
            return 
            res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Post retrived successfully",
            data: post,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch post",
        });
    }
};