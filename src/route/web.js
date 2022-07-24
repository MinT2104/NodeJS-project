import express from "express";
import homeController from "../controller/homeController";
import connection from "../config/connectDB";
import jwt, { decode }  from "jsonwebtoken";
import passport from "passport"
var LocalStrategy = require('passport-local').Strategy



let router = express.Router()
const initWebRoute = (app)=>{

  //--------------------------------------Login authen--------------------------------------------------------//
  router.post('/users/login',(req,res,next)=>{
    let { username, password } = req.body;
      connection.query(`SELECT * FROM users WHERE username="${req.body.username}"`,function(err,rows,fields){
       if(rows == undefined){
        return res.status(400).redirect("/middlepage") 
       }
 if(rows){
     rows.forEach((row)=>{
      if(row["password"] !== req.body.password ){
            return res.status(403).send({
              message: "password không đúng"
            })}
          console.log(rows)
          console.log(req.body.password)
          console.log(row['username'])
          var result = jwt.sign(row['username'], 'Thang@12')
          console.log(result)
             res.cookie("access_token", result, {
              httpOnly: true,
              secure:false,
            })
          })      
          return res.status(200).redirect("/users")
      }
});
       
  })
 
//------------------------------------------Checking account------------------------------
function checkMiddleware(req,res,next){
  const token = req.cookies.access_token;
  if(!token){
   return res.status(403).redirect("/users/login")
  }
  jwt.verify(token,"Thang@12",(err,decoded)=>{
   if(err){
     return res.status(401).send({
       message: "Unauthorized!"
     })
   }
   
   res.render("home.ejs", {decoded: decoded});
   next()
  })
 }


//------------------------------------------------router-----------------------------------------------
    router.get('/admin/users',homeController.getUser);
    router.get('/users',checkMiddleware, homeController.getHomePage);
    router.get('/users/login', homeController.getLogin);
    router.get('/users/about',checkMiddleware, homeController.getAbout);
    router.get('/users/gallery',checkMiddleware, homeController.getGallery);
    router.get('/users/blogs', homeController.getBlogs);
    router.get('/add', function(req,res){ res.render('signup.ejs') });
    router.post('/add', homeController.addStudent);
    router.get('/middlepage', function(req,res){ res.render('middlepage.ejs') })
    


    //Delete-----------------------------
    router.get('/delete-user/:id',function(req,res){
    // return  res.render("hello from delete");
     connection.query(`delete from users where id=${req.params.id}`,function(err){
      if(err) throw err
      res.redirect("/admin/users");
     })
    })
    router.get('/edit/:id', (req,res)=>{
    var data = connection.query(`SELECT * FROM users WHERE id=${req.params.id}`,function(err,result){
      if(err) throw err;
      data = {
        id:result[0].id,
        username:result[0].username,
        Email:result[0].Email,
        password:result[0].password
      }
      res.render('edit',{data})
     })
     
    });
    router.post('/edit/:id', function(req,res){
      let { username, Email, password } = req.body;
      connection.query(`UPDATE users SET username='${req.body.username}',Email='${req.body.Email}',password='${req.body.password}' where id=${req.params.id}`,
      function(err){
        if(err) throw err
        res.redirect("/admin/users")

      })
    });



     return app.use('/', router);
}
export default initWebRoute;