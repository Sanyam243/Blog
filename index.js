const express =require('express')
const app =  express();
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
mongoose.connect("mongodb+srv://sanyam123:s12345@cluster0.3balsqw.mongodb.net/todo-app")
app.use(express.json());
const {auth,JWT_SECRET}= require('./auth')
const { UserModel, TodoModel ,PostModel } = require("./db");
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));


app.post("/signup",async(req,res)=>{
    const name = req.body.name;
    const password =req.body.password;
    const email = req.body.email;

    try{
        const hashedPassword = await bcrypt.hash(password,4);

        await UserModel.create({
            name:name,
            password:hashedPassword,
            email:email
        })

        
    
        
    }catch(e){
        res.json("Server Crashes")
    }

    res.json({message:"You are signed in"});
   

})
app.post("/login",async (req,res)=>{
    
   
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    });

    const passwordMatch =  bcrypt.compare(password, user.password);
    if (user && passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
})



app.post("/post",auth,async(req,res)=>{
    const title = req.body.title;
    const content = req.body.content;

    const user = await UserModel.findOne({
        _id: req.id
    });


   const data= await PostModel.create({
        title:title,
        content:content,
        authorId:(req.id),
        createdAt: new Date(),
        authorName: user.name
    });
   
    console.log(data);
    res.json({message:"Post Created"});
})



app.get("/posts",auth,async(req,res)=>{
    try {
        // Retrieve all posts
        const posts = await PostModel.find();

        // Send the posts as a response
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

})

app.get("/getposts",auth,async(req,res)=>{

    const data = req.query.user;
    console.log(data);
    try {
        // Retrieve all posts
        const author = await UserModel.findOne({
            name: data
        });
        if(!author){
            res.status(404).json({ error: "User not found" });
        }
        const posts = await PostModel.find({
            authorId: author._id
        });

        // Send the posts as a response
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

})

app.get("/getpost",auth,async(req,res)=>{

    
    try {
        // Retrieve all posts
        
        const posts = await PostModel.find({
            authorId: req.id
        });

        // Send the posts as a response
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

})


app.listen(5000)
