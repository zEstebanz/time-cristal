import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import chalk from "chalk";
import authRoutes from "./routes/auth.routes.js"
import taskRoutes from "./routes/task.routes.js"

//atajos
export const log = console.log;

//terminal styles to indicate server status
export const text = chalk.hex('#FFFFFF');
export const sign = chalk.magenta;
export const sist = chalk.green;
export const href = chalk.bold.cyan;
export const error = chalk.bold.red;
export const warning = chalk.bold.hex('#FFA500');

//special icons
export const arrow = sist(` ➜ `);
export const lamda = sist(` λ `);
export const leaf = sist(` 🙐 `);

//server settings
export const port = 3000;
export const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api', authRoutes);
app.use('/api', taskRoutes);