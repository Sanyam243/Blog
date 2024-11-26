const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: {type:String,unique:true},
  email: {type:String,unique:true},
  password: String,
  
});

const Post = new Schema({
  createdAt: Date,
  title: String,
  content: String,
  authorId: {type: ObjectId, ref: 'User'},
  authorName: String
})

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: Boolean
});

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);
const PostModel = mongoose.model('posts', Post);

module.exports = {
    UserModel,
    TodoModel,
    PostModel
}