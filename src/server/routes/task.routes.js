import { Router } from "express";
import { authRequired } from "../middlewares/validateTokens.js";
import { validateSchema } from "../middlewares/validateFields.js";
import { createTaskSchema } from "../schemas/task.schema.js";
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";

const router = Router();
router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask);
router.put('/tasks/:id', authRequired, updateTask);
router.delete('/tasks/:id', authRequired, deleteTask);

export default router;