import {Schema,model} from 'mongoose';


interface Student{

    name : string;
    email : string;
    place : string;
    course : string;
    duration : string,
    isBlocked :boolean
}

const studentSchema = new Schema<Student>({
    name : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    place : {
        type : String,
        required : true
    },
    course :{
        type : String,
        required : true
    },
    duration :{
        type:String,
        required : true
    },
    isBlocked :{
        type : Boolean,
        default:false
    }
},{timestamps:true});

const StudentModel = model<Student> ('Student',studentSchema);
export {StudentModel}