import { Document } from 'mongoose';

export default interface IUserDocument extends Document {
  user: string;
  email: string;
  password: string;
  aboutme?: string;
}
export interface IBlogDocument extends Document {
  title: string,
  image: string,
  description: string,
  commentsSchema:string[] | null,
  user: IUserDocument['_id'];
}