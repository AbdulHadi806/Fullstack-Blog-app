import multer from 'multer';
import { Request } from 'express';
import path from 'path';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..',  '..', 'public/images'));
  },
  filename: (req: Request, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;
