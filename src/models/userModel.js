const db = require('../db/models/index.js');

/**
 *
 *
 * @class userinfoModel
 */
module.exports = class UserModel{
    /**
     *Creates an instance of userinfoModel.
     * @constructor
     * @author: 
     * @this {userinfoModel}
     * @param {}
     */
    constructor(){
        this.db = db; 
    }

    /**
     *
     *
     * @param {String} id 사용자 id
     * @returns {number} rows.cnt 쿼리에서 조회된 id 갯수
     */
    async getuserIdCnt(id){
     /*    await this.db.getConnection();
        let [rows] = await this.db.get(userinfo.SELECT_USER_ID_CNT,[id]);
        this.db.closeConnection();
        return rows.cnt; */
        return 1;
    }

    /**
     *
     *
     * @param {String} id 사용자 id
     * @param {String} pw 사용자 pw
     * @returns {number} rows.cnt 사용자 정보 갯수
     */
    async checkUser(id,pw){
        try {
            let row = await this.db.user.count({ where: {'user_id': id, 'password':pw } })
            //console.log("row ", row);
            return Number(row);
        } catch (error) {
            
        }
    }

    /**
     * 사용자정보 조회
     *
     * @param {String} id 사용자 id
     * @returns {Object} 사용자 정보 객체
     */
    async getuserInfo(id){
        try {
            let row = await this.db.user.findOne({ where: {'user_id': id }})
            console.log("row ", row.dataValues);
            return row.dataValues;
        } catch (error) {
            
        }
    }

    /**
     * 디비에 사용자 정보 추가
     *
     * @param {Object} info 사용자정보
     * @returns {Object} 쿼리 수행 결과
     */
    async insertuserInfo(info){
      /*   await this.db.getConnection();
        await this.db.get(userinfo.INSERT_USER_INFO,info);
        this.db.closeConnection();*/
        return true; 
    }
    /**
     * 디비에 사용자 태그 추가
     *
     * @param {String} id 사용자 id
     * @param {Array} tags 사용자 tag목록 
     * @returns {boolean} 쿼리 수행 결과
     */
    async insertuserTags(id,tags){
       
     /*    await this.db.getConnection();
        for (const tag of tags) {
            console.log("user insert tags : ", id, ' - ', tag)
            await this.db.get(userinfo.INSERT_USER_TAGS, [id,tag]).catch((e)=>{
                console.log("errer??" , e)
            });
        }
        this.db.closeConnection(); */
        return true;
    }

    /**
     * 사용자 정보 배열 얻기
     *
     * @param {*} offset 데이터 시작위치
     * @param {*} limit 가지고 올 아이템 갯수
     * @returns 사용자 객체들을 담은 배열
     */
    async getuserList(offset, limit){
       /*  await this.db.getConnection();
        let userlist = await this.db.get(userinfo.SELECT_USER_LIST, [limit,offset]).catch((e)=>{
            console.log("errer??" , e);
        });
        this.db.closeConnection();
        return userlist; */
        return [];
    }

    /**
     * 사용자 권한 수정
     *
     * @param {*} userid id
     * @param {*} type 권한 타입
     * @returns 성공여부
     */
    async setuserAuth(userid, type){
       /*  await this.db.getConnection();
        let info = [type,userid];
        await this.db.get(userinfo.UPDATE_USER_AUTH_TYPE,info);
        this.db.closeConnection(); */
        return true;
    }


    /**
     * 사용자 정보 수정 
     *
     * @param {*} userid
     * @param {*} userinfo
     * @returns
     */
    async setuserInfo(userid, uinfo){
        /* await this.db.getConnection();
        let infoObject ={
            "user_name" :uinfo.user_name,
            "birth" :uinfo.birth,
            "gender" :uinfo.gender,
            "email" :uinfo.email,
            "phone" :uinfo.phone
        };
        let info = [ ...Object.values(infoObject),userid ];
        await this.db.get(userinfo.UPDATE_USER_INFO, info);
        this.db.closeConnection(); */
        return true;
    }

    
}