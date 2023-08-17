import IUserDocument from "../interfaces/modal";
import mongoose, { Model } from "mongoose";

const userSchema = new mongoose.Schema({
        user: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        aboutme: {
            type: String,
        },
}, {timestamps: true});
interface IUserModel extends Model<IUserDocument> {}

const User: IUserModel = mongoose.model<IUserDocument>('User', userSchema);
export default User