const express = require('express');
const router = express.Router();
//const {signinService} = require('../service/signinService.js');
let  path = require('path');
//let user = new signinService();
//const {AuthController} = require('./controller/authController.js');
//let authController = new AuthController(user);
const jwt = require('jsonwebtoken'); //env
const privateKey="abcdefghijklmnopqrstuvwxyz012345" // env


// url : /signin/
router.get('/', (req, res,next)=>{
    res.render(path.join(__dirname ,'../views/signin.ejs'));
});

module.exports = function (passport) {
   /*router.post('/login_process',
        passport.authenticate('local', {
        successRedirect: '/auth', // /
        failureRedirect: '/auth/loginpage'
    }));*/
    

    router.post('/login_process', (req, res, next)=>{
        passport.authenticate('local',{ session: false }, (err, user, info)=>{
          if(err) { return next(err); }
          if (!user) { return res.redirect('/auth/loginpage'); }
          req.login(user, { session: false },(err)=>{

            if (err) { return next(err); }

            //console.log("login error",user);
            let signedJWT = jwt.sign(user, privateKey, { algorithm: 'HS256'});
            console.log("lalalreq "+ res.cookie );
            res.cookie('jwt', signedJWT);

            return res.redirect('/auth');
          });
        })(req, res, next);
      });
    return router;
}
