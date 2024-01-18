import ApiError from "../error/ApiError"
import { Task, User } from "../models"
import { Request, Response, NextFunction } from 'express'
class userController{
    async create(req: Request, res: Response, next: NextFunction){
        try {
            const { username } = req.body
            const user = await User.create({username})
            return res.json(user)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getOne(req: Request, res: Response, next: NextFunction){
        try {
            const { username } = req.params
            const user = await User.findOne({where: {username}, include: [{model: Task, as: 'tasks'}]})
            return res.json(user)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req: Request, res: Response, next: NextFunction){
        try {
            const users = await User.findAll()
            return res.json(users)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
}
export default new userController()