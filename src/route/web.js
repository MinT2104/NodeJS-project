import express from "express";
import homeController from "../controller/homeController";
import connection from "../config/connectDB";
import jwt, { decode }  from "jsonwebtoken";
import checkMiddleware from "../MiddleWare/middleware";




let router = express.Router()
const initWebRoute = (app)=>{
  //-----------------------------------------------------------------------------------------------------------------
  let getKookie = (req,res)=>{
    token = req.cookie.access_token
    console.log(token)
    
}
//--------------------------------------logout---------------------------------------------//
router.get("/logout",(req,res)=>{
    res.cookie("access_token", '', { maxAge:1 } )
    res.redirect("/users/login")

})
  //--------------------------------------Login authen--------------------------------------------------------//
  router.post('/users/login',(req,res)=>{
    
    let { username, password } = req.body;
      connection.query(`SELECT * FROM users WHERE username="${req.body.username}"`,function(err,rows,fields){
       if(rows == undefined){
        return res.status(400).redirect("/middlepage") 
       }
 if(rows){
     rows.forEach((row)=>{
      if(row["password"] !== req.body.password ){
            return res.status(403).redirect("/users/login")}
          console.log(rows)
          console.log(req.body.password)
          console.log(row['username'])
          var userProfile = {
            id: row['id'],
            username : row["username"],
            email: row["Email"],
            phone: row["phone"],
            address: row["address"],
          }
          var result = jwt.sign(userProfile, 'Thang@12')
          console.log(result)
             res.cookie("access_token", result,  {maxAge: 360000},{
              httpOnly: true,
              secure:false,
            })
          }) 
          
          //  console.log(req.cookies.access_token)    
          return res.status(200).redirect("/users")
          
      }
});
       
  })
 
//------------------------------------------Checking account------------------------------

//------------------------------------------------router-----------------------------------------------
    router.get('/admin/users',homeController.getUser);
    router.get('/admin/posts',homeController.getPost);
    router.get('/admin/createpost', function(req,res){ res.render('createpost.ejs') })
    router.post('/admin/createpost', homeController.getCreateBlogs)

   

//---------------------------blogs-----------------------------//
router.get('/users/blogs/viewblogs/:id',(req,res,next)=>{
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
   var data = connection.query(`SELECT * FROM posts WHERE id=${req.params.id}`,function(err,result){
    if(err) throw err;
    data = {
      id:result[0].id,
      type:result[0].type,
      title:result[0].title,
      creator:result[0].creator,
      day:result[0].day,
      imgurl:result[0].imgurl,
      content:result[0].content,
      shortcontent:result[0].shortcontent,
    }
    res.render('viewblogs',{
    data: data,
    decoded: decoded
  })
   })
  })
 });
    
    
//-------------------------------------------------userprofile------------------------------------//
router.get('/users/userprofile',(req,res,next)=>{
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
   res.render('userprofile.ejs',{decoded: decoded});
   next()
  })
 });
 router.post('/users/userprofile',(req,res,next)=>{
  const token = req.cookies.access_token;
  let Val = jwt.verify(token,"Thang@12")
  let { username, Email, password, phone, } = req.body;
  connection.query(`UPDATE users SET username='${req.body.username}',Email='${req.body.Email}',phone='${req.body.phone}',address='${req.body.address}' where id=${Val["id"]}`,
  function(err, decoded){
    if(err) throw err
    var userProfile = {
      id: decoded['id'],
      username : decoded["username"],
      email: decoded["Email"],
      phone: decoded["phone"],
      address: decoded["address"],
    }
    var result = jwt.sign(userProfile, 'Thang@12')
    res.cookie("access_token", '', { maxAge:1 } )
    console.log(result)
       res.cookie("access_token", result,  {maxAge: 360000},{
        httpOnly: true,
        secure:false,
      })
    res.render("userprofile.ejs",{decoded: decoded})
  })
})

//-------------------------------------------------homepage------------------------------------//
    router.get('/users',(req,res,next)=>{
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
       res.render('home.ejs',{decoded: decoded});
       next()
      })
     });
    //----------------------------login-------------------------------
    router.get('/users/login', homeController.getLogin);
     //--------------------------------about----------------------------
    router.get('/users/about',(req,res,next)=>{
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
       res.render('about.ejs',{decoded: decoded});
       next()
      })
     }, homeController.getAbout);
 
     //----------------------------------------------blogs------------------------------//

    router.get('/users/blogs',(req,res,next)=>{
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
       connection.query("SELECT * FROM posts", function(err, datas){
        if(err) throw err
        res.render('blogs.ejs',{
          decoded: decoded,
          datas: datas
        });
    })
      })
     });

    router.get('/add', function(req,res){ res.render('signup.ejs') });
    router.post('/add', homeController.addStudent);
    router.get('/middlepage', function(req,res){ res.render('middlepage.ejs') })
    router.post('/users/blogs', homeController.getBlogs);
    
   //--------------------------------gallery----------------------------

    router.get('/users/gallery',(req,res,next)=>{
      const token = req.cookies.access_token;
      console.log(token)
      if(!token){
       return res.status(403).redirect("/users/login")
      }
      jwt.verify(token,"Thang@12",(err,decoded)=>{
       if(err){
         return res.status(401).send({
           message: "Unauthorized!"
         })
       }
       res.render('gallery.ejs',{decoded: decoded});
       next()
      })
     });

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
        password:result[0].password,
        phone:result[0].phone,
        address:result[0].address,

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