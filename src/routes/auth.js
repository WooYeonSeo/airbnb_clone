var express = require('express');
var router = express.Router();
const path = require('path');

const {AuthController} = require('./controller/authController.js');
let authController = new AuthController();
/* GET home page. */
// url : /auth/
router.get('/',  (req, res)=>{
  //console.log("ㅡmain page ", req.session );
  console.log("is logined");
  //let result = authController.loginSessionCheck(req,res);
  //res.render(path.join(__dirname ,'../../web/views/index.ejs'));
  res.send("why??");
});

// url : /auth/loginpage
router.get('/loginpage', (req, res, next)=>{
  //res.render(path.join(__dirname ,'../../web/views/index.ejs') , { title: 'Express' });
  console.log("not login");
  res.render(path.join(__dirname ,'../../web/views/index.ejs'));
});
module.exports = router;
