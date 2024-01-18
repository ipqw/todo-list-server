import ApiError from "../error/ApiError"
import { Task } from "../models"
import { Request, Response, NextFunction } from 'express'
class taskController{
    async create(req: Request, res: Response, next: NextFunction){
        try {
            const { title, description, status, userId } = req.body
            const task = await Task.create({title, description, status, userId})
            return res.json(task)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getOne(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.params
            const task = await Task.findOne({where: {id}})
            return res.json(task)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req: Request, res: Response, next: NextFunction){
        try {
            const task = await Task.findAll()
            return res.json(task)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async update(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.params
            const { title, description, status } = req.body
            const task = await Task.findOne({where: {id}})
            task?.set({
                title, description, status
            })
            await task?.save()
            return res.json(task)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async delete(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.body
            const task = await Task.findOne({where:{id}})
            if(task){
                Task.destroy({where:{id}})
                return res.json('Task was deleted')
            }
            else{
                return res.json('Task was not found')
            }
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
}
export default new taskController()