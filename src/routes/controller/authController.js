const {AuthService} = require('../../service/authService.js');
let auth =  new AuthService();   

class AuthController {
    constructor(){

    }

    /**
     * passport local 로그아웃 라우터
     *
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @memberof AuthController
     */
    async logoutRouter(req,res,next){
        //let result = await auth.idChecker(req.body.id); // true false
        let result = {
            status : '200',
            message : '요청 성공',
            data : { }
        }
        req.logout();

        req.session.save(()=>{
            if( Object.keys(req.session.passport).length == 0){
                result.data["is_logined"] = false;
            }
            console.log(result);
            res.json(result); 
        });
    }

    /**
     * 사용자 정보 페이지별로 받는 라우터 함수
     *
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @memberof AuthController
     */
    async getUsersRouter(req,res,next){
        let result = {
            status : '',
            message : '',
            data : {
                
            }
        };
        let page = req.params.page;
        let offset = 10;
    
        let users = await auth.getUsers(page*offset,offset);
        result.data['userlist'] = users;
        
        res.json(result); 
    }

    /**
     * 관리자 권한 수정 라우터
     *
     * @param {*} req
     * @param {*} res
     * @memberof AuthController
     */
    async updateAuthTypeRouter(req,res){
        let result = {
            status : '',
            message : '',
            data : {  }
        };
        
        if(await auth.updateAuth(req.body.userid, req.body.type)){
            result.status = 200;
            result.message = '수정 성공';
        }
        
        res.json(result);
    }

    /**
     * 관리자 권한 확인용 미들웨어
     *
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @memberof AuthController
     */
    async checkAdminAuthRouter(req,res,next){
        if(req.user !== undefined && Number(req.user.is_admin) === 1){
            next();
        }else{
            res.redirect('/')
        }
    }


    /**
     * passport 로그인 상태 세션 체크 함수 
     *
     * @param {*} req
     * @param {*} res
     * @returns
     * @memberof AuthController
     */
    loginSessionCheck(req,res){
        let result = {
            status : 500,
            message : '요청 성공',
            data : { 
                    is_logined : false,
                    name : "",
                }
        };
        if( req.session !== undefined && req.session.passport !== undefined ){
          if(req.session.passport.user!==undefined){
            result.status = 200;
            result.data.is_logined = true;
            result.data.name = req.session.passport.user.user_name;
          }
        }
    
        return result;
    }

    /**
     * 사용자 정보 수정 라우터
     *
     * @param {*} req
     * @param {*} res
     * @memberof AuthController
     */
    async updateUserRouter(req,res){
        let result = {
            status : '',
            message : '',
            data : {  }
        };

        if(await auth.updateUser(req.body.user_id, req.body)){
            result.status = 200;
            result.message = '수정 성공';
        }
        
        res.json(result);
    }
}
module.exports ={AuthController}