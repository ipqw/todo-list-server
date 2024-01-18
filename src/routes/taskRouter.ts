import { Router } from "express";
import taskController from "../controllers/taskController";
const router: Router = Router()

router.get('/:id', taskController.getOne)
router.get('/', taskController.getAll)
router.post('/:id', taskController.update)
router.post('/', taskController.create)
router.delete('/', taskController.delete)

export default router