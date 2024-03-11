import express from "express";
import morgan from "morgan";
import chalk from "chalk";
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
export const app = express()
export const startTime = Date.now()
app.use(morgan('dev'))