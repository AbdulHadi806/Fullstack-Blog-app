import { Request, Response } from 'express'
import User from "../model/user"; 
import IUserDocument from '../interfaces/modal'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { UserDetails } from 'interfaces/user';

export const signUp = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            user: req.body.user,
            email: req.body.email,
            password: hashedPassword,
            aboutme: req.body.aboutme
        })
        console.log(newUser)

        await newUser.save()
        res.status(200).json({ status: "Signup successful" })
    } catch (err) {
        res.status(500).json({ err, status: "Failed" })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const user: UserDetails | null = await User.findOne({ email: req.body.email });

        if (user) {
            const passwordChecker = await bcrypt.compare(req.body.password, user.password);

            if (passwordChecker) {
                const token = jwt.sign({
                    user: user.user,
                    _id: user._id,
                }, "secret_is_a_secret", {
                    expiresIn: '1d'
                });
                res.set('Authorization', `Bearer ${token}`).status(200).json({ user: {aboutme: user.aboutme, createdAt: user.createdAt, email:user.email, user: user.user}, token });
            } else {
                res.status(400).json({ status: "Password or user not correct" });
            }
        } else {
            res.status(400).json({ status: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ err, status: "Failed" });
    }
};

