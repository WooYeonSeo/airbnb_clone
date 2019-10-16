var express = require('express');
var router = express.Router();
const path = require('path');

const {AuthController} = require('./controller/authController.js');
let authController = new AuthController();


/* GET home page. */
// url : /auth
router.get('/',  (req, res)=>{
  //console.log("ㅡmain page ", req.session );
  console.log("is logined",req.session);
  res.render(path.join(__dirname ,'../../web/views/index.ejs'));
});

// url : /auth/loginpage
router.get('/loginpage', (req, res, next)=>{
  //res.render(path.join(__dirname ,'../../web/views/index.ejs') , { title: 'Express' });
  console.log("not login");
  res.render(path.join(__dirname ,'../../web/views/index.ejs'));
});

// url : /signin/
router.post('/test', authController.loginjwtCheck ,(req,res)=>{
  //console.log("jwtjwtjwtjwt------",req.decoded)
  res.send("test result : ");
})

module.exports = router;
