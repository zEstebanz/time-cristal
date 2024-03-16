import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js"
import { log, text, sign, sist, href, error, warning, arrow, lamda, leaf } from "../app.js";
export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if (err) reject(log(text(error(`Error:`), err)));
                resolve(token)
            });
    })
}