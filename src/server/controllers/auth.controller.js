import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { log, text, sign, sist, href, error, warning, arrow, lamda, leaf } from "../app.js";

export const register = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })
        const userSaved = await newUser.save();
        jwt.sign({
            id: userSaved._id,
        },
            "secret123",
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if (err) log(text(error(`Error:`), err));
                res.cookie('token', { token });
                res.json({
                    message: "User created successfully",
                })
            });
    } catch (error) {
        log(error(error))
    }
}

export const login = (req, res) => res.send('login');