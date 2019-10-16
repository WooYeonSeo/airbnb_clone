const UserModel = require('../src/models/userModel');
const assert = require('assert');
const userModel = new UserModel();

describe('사용자 정보 db model 함수들 확인  ', ()=>{
    it("로그인 유효한 사용자 확인 (로그인 가능 사용자) ", (done)=>{
        (async ()=>{
            let id = "test1";
            let pw = "1234";

            let result = await userModel.checkUser(id,pw);
            console.log("result" + result);
            assert.ok(result > 0);
            done();
        })();
    });

     it("유효하지 않은 사용자 로그인 확인 (로그인 불가능 사용자)  ",  (done)=>{
        (async ()=>{
            let id = "nobody";
            let pw = "1234";
            let result = await userModel.checkUser(id,pw);
            assert(Number(result) === 0);
            done();
        })();
    }); 
});
