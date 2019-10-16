const express = require('express');
const router = express.Router();
//const {signinService} = require('../service/signinService.js');
let  path = require('path');
//let user = new signinService();
//const {AuthController} = require('./controller/authController.js');
//let authController = new AuthController(user);
// url : /signin/
router.get('/', (req, res,next)=>{
    res.render(path.join(__dirname ,'../views/signin.ejs'));
});

module.exports = function (passport) {
    router.post('/login_process',
        passport.authenticate('local', {
        successRedirect: '/auth', // /
        failureRedirect: '/auth/loginpage'
    }));
    return router;
}
