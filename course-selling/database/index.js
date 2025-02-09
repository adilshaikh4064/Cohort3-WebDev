const mongoose = require('mongoose');


const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const UserSchema=new Schema({
    email:{type:String, unique:true},
    password:String,
    firstname:String,
    lastname:String
})

const AdminSchema=new Schema({
    email:{type:String, unique:true},
    password:String,
    firstname:String,
    lastname:String
})

const CourseSchema=new Schema({
    title:String,
    discription:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
})

const PurchaseSchema=new Schema({
    courseId:ObjectId,
    userId:ObjectId
})

const User=mongoose.model('User',UserSchema);
const Admin=mongoose.model('Admin',AdminSchema);
const Course=mongoose.model('Course',CourseSchema);
const Purchase=mongoose.model('Purchase',PurchaseSchema);



module.exports={
    User,
    Admin,
    Course,
    Purchase,
}