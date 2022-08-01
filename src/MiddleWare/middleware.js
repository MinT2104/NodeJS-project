import jwt from "jsonwebtoken"

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
     res.render('home.ejs',{decoded: decoded});
     next()
    })
   }


   module.exports = checkMiddleware