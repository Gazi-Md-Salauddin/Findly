import { ObjectId } from 'mongodb';
import { itemsCollection } from '../models/post.model';

export const createItemService = async (itemData: any) => {
    const result = await itemsCollection.insertOne(itemData);

    return {
        _id: result.insertedId,
        ...itemData,
    };
};

export const getItemService = async () => {
    const items = await itemsCollection.find().toArray();
    return items;
}
// Get a single post by its MongoDB ID
export const getItemByIdService = async (id: string) => {
    const post = await itemsCollection.findOne({
        _id: new ObjectId(id),
    })
    return post;
}