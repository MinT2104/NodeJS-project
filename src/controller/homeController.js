import checkMiddleware from "../MiddleWare/middleware";
import decoded from "../MiddleWare/middleware";
import connection from "../config/connectDB"
import jwt from "jsonwebtoken";





let getUser = (req,res) =>{
    connection.query("SELECT * FROM users", function(err, data){
        if(err) throw err
       res.render("index.ejs", {data: data})   
    });

};
let getPost = (req,res) =>{
    connection.query("SELECT * FROM posts", function(err, data){
        if(err) throw err
       res.render("post.ejs", {data: data})   
    });

};
let getLogin = (req,res) =>{
       res.render("login.ejs");
}
let getBlogs = (req,res) =>{
}
let getHomePage = (req,res) =>{
       res.render("home.ejs");    
    }
let getAbout = (req,res) =>{
    res.render("about.ejs");
}

let addStudent = (req,res) =>{
    let { username, Email, password } = req.body;
    connection.query(`INSERT INTO users (username,Email,password) VALUES('${req.body.username}','${req.body.Email}','${req.body.password}')`,
    function(err){
      if(err) throw err
      res.redirect("/users/login")
    })
  
}
let getCreateBlogs = (req,res)=>{
    connection.query(`INSERT INTO posts (type,title,day,creator,content,imgurl,shortcontent) VALUES('${req.body.type}','${req.body.title}','${req.body.day}','${req.body.creator}','${req.body.content}','${req.body.imgurl}','${req.body.shortcontent}')`,
    function(err){
      if(err) throw err
      res.redirect("/admin/posts")
    })
  
}
module.exports = {
    getHomePage, addStudent, getLogin, getUser, getAbout, getPost, getBlogs,getCreateBlogs
}
