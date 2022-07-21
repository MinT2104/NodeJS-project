import express from "express";
import homeController from "../controller/homeController";
import connection from "../config/connectDB";


let router = express.Router()

const initWebRoute = (app)=>{

    router.get('/users', homeController.getUser);
    router.get('/', homeController.getHomePage);
    router.get('/login', homeController.getLogin);
    router.get('/about', homeController.getAbout);
    router.get('/gallery', homeController.getGallery);
    router.get('/blogs', homeController.getBlogs);
    
    router.get('/add', function(req,res){ res.render('signup.ejs') });

    router.post('/add', homeController.addStudent);

    //Delete-----------------------------
    router.get('/delete-user/:id',function(req,res){
    // return  res.render("hello from delete");
     connection.query(`delete from users where id=${req.params.id}`,function(err){
      if(err) throw err
      res.redirect("/users");
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
        res.redirect("/users")

      })
    });



      return app.use('/', router);
}
export default initWebRoute;