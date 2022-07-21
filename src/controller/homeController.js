// import pool from '../configs/connectDB';
// import express from "express";
import connection from "../config/connectDB"

let getUser = (req,res) =>{
    connection.query("SELECT * FROM users", function(err, data){
        if(err) throw err
       res.render("index.ejs", {data: data})     ;
    });

};
let getLogin = (req,res) =>{
       res.render("login.ejs");
}
let getHomePage = (req,res) =>{
           res.render("home.ejs");
    }
let getAbout = (req,res) =>{
    res.render("about.ejs");
}
let getGallery = (req,res) =>{
    res.render("gallery.ejs");
}
let getBlogs = (req,res) =>{
    res.render("blogs.ejs");
}

let addStudent = (req,res) =>{
    let { username, Email, password } = req.body;
    connection.query(`INSERT INTO users (username,Email,password) VALUES('${req.body.username}','${req.body.Email}','${req.body.password}')`,
    function(err){
      if(err) throw err
      res.redirect("/login")
    })
  
}

module.exports = {
    getHomePage, addStudent, getLogin, getUser, getAbout, getBlogs, getGallery
}
