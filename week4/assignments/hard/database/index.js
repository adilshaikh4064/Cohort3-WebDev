const mongoose = require('mongoose');

const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;


// Connect to MongoDB
mongoose.connect('mongodb+srv://adilshaikh:Adil4064%40@democluster.amro0.mongodb.net/Todo-Application');

// Define schemas

const UserSchema = new Schema({
    // Schema definition here
    username:String,
    email:{type:String,unique:true},
    password:String
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    done:Boolean,
    userId:ObjectId,
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}