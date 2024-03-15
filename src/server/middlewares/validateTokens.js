import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js"
import { log, text, sign, sist, href, error, warning, arrow, lamda, leaf } from "../app.js";

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "No token, Authorization denied" });
    }

    jwt.verify(token, TOKEN_SECRET,(err,user) => {
        if (err) {
            return res.status(403).json({ message: "invalid token" });
        }
        req.user = user;
        next();
    })
}