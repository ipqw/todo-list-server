import { Router } from "express";
import userRouter from './userRouter'
import taskRouter from './taskRouter'
const router: Router = Router()

router.use('/user', userRouter)
router.use('/task', taskRouter)

export default router