import express,{Request,Response} from "express";

// export const getForm=(req:Request,res:Response)=>{
//     res.render('studentList')
// }
// export const addStudent=(req:Request,res:Response)=>{
//     res.render('student')
// }

class stdController{
    static async addStudent(req:Request,res:Response){
        try {
            res.render('student')
        } catch (error) {
            console.error(error)
        }
    }
    static async stdList(req:Request,res:Response){
        try {
            res.render('studentList')
        } catch (error) {
            console.error(error)
        }
    }
}
export {stdController};