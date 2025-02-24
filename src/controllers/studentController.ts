import express,{Request,Response} from "express";
import {StudentModel} from '../models/studentDetails';



class stdController{
    static async loadAddStudent(req:Request,res:Response){
        try {
            res.render('student')
        } catch (error) {
            console.error(error)
        }
    }
    static async loadStdList(req:Request,res:Response){
        try {
            const students = await StudentModel.find({isBlocked:false});
            res.render('studentList',{students})
        } catch (error) {
            console.error(error)
        }
    }
    static async addStudent(req:Request,res:Response){
        try {
            const {fullName,email,course,place,duration} = req.body;
            const newStudent = new StudentModel({
                name:fullName,
                email,
                course,
                place,
                duration
            })
            await newStudent.save();
            res.status(200).json({message:"success"})
        } catch (error) {
            console.error(error)
        }
    }
    static async loadEditStudent(req:Request,res:Response){
        try {
            const {stdId} = req.params;
            const student = await StudentModel.findOne({_id:stdId})
            res.render('editStudent',{student});
        } catch (error) {
            console.error(error)
        }
    }
    static async editStudent(req:Request,res:Response){
        try {
            const {fullName,email,place,course,duration} = req.body;
            const {stdId} =req.params;
            const updateData = await StudentModel.findByIdAndUpdate(
                stdId,
                {
                    name: fullName,
                    email,
                    course,
                    place,
                    duration
                },
                { new: true, runValidators: true }
            );
            
           
            res.status(200).json({message:"success"})
        } catch (error) {
            console.error(error)
        }
    }
    static async deleteStudent(req:Request,res:Response){
        try {
            const {stdId} = req.params;
            const softDeleteStudent = await StudentModel.updateOne({_id:stdId},{$set:{isBlocked:true}})
        } catch (error) {
            
        }
    }
}
export {stdController};