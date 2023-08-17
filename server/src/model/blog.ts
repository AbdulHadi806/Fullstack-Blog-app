import { IBlogDocument } from "../interfaces/modal";
import mongoose, { Model } from "mongoose";


const commentsSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    }
});

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    commentsSchema: {
        type: [commentsSchema],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });
interface IBlogModel extends Model<IBlogDocument> { }

const Blog: IBlogModel = mongoose.model<IBlogDocument>('Blog', blogSchema);
export default Blog