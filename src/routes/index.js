var express = require('express');
var router = express.Router();
const path = require('path');

//const {AuthController} = require('./controller/authController.js');
//let authController = new AuthController();
/* GET home page. */
router.get('/',  (req, res, next)=>{
  console.log("ㅡmain page ", req.session );
  //let result = authController.loginSessionCheck(req,res);
  res.render(path.join(__dirname ,'../../web/views/index.ejs'));
});

module.exports = router;
