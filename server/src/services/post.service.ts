import { itemsCollection } from '../models/post.model';

export const createItemService = async (itemData: any) => {
    const result = await itemsCollection.insertOne(itemData);

    return {
        _id: result.insertedId,
        ...itemData,
    };
};