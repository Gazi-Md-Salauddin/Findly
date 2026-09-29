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


// update post in dashboard
export const updatePostService = async (id: string,
    updateData: any
) => {
    if (!ObjectId.isValid(id)) {
        return null;
    }

    const result = await itemsCollection.updateOne(
        {
            _id: new ObjectId(id),
        },
        {
            $set: updateData,
        }
    );

    if (result.matchedCount === 0)
    {
        return null;
    }

    const updatePost = await itemsCollection.findOne({
        _id: new ObjectId(id),
    });
    
    return updatePost;
}

// Delete post in dashboard
export const deletePostService = async (id: string) => {
    if (!ObjectId.isValid(id)) {
        return null;
    }

    const result = await itemsCollection.deleteOne({
        _id: new ObjectId(id),
    });
    return result;
};