import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

export const checkAuth = (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token found" });
    }

    jwt.verify(token, 'secret_is_a_secret', (err: jwt.VerifyErrors | null, decoded: any) => {
        if (err) {
            return res.status(401).json({ message: "Wrong access key", err });
        }
        req.user = decoded;
        return next();
    });
};
