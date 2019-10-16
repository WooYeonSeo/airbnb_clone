const express = require('express');
const router = express.Router();
let  path = require('path');
const jwt = require('jsonwebtoken'); //env
const privateKey="abcdefghijklmnopqrstuvwxyz012345" // env


module.exports = function (passport) {

    router.post('/login_process', (req, res, next)=>{
        passport.authenticate('local',{ session: false }, (err, user, info)=>{
          if(err) { return next(err); }
          if (!user) { return res.redirect('/auth/loginpage'); }
          req.login(user, { session: false },(err)=>{

            if (err) { return next(err); }

            let signedJWT = jwt.sign(user, privateKey, { algorithm: 'HS256'});
            res.cookie('jwt', signedJWT);
            
            return res.redirect('/auth');
          });
        })(req, res, next);
      });
    
    return router;
}
