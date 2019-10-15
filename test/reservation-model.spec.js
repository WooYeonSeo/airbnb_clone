const ReservationModel = require('../src/models/reservationModel');
const assert = require('assert');
const reservationModel = new ReservationModel();

describe('숙소 정보 db model data  ', ()=>{
    it("숙소 검색 데이터 10개 이하 확인  ", async ()=>{
        (async ()=>{
            let result = await reservationModel.getLodgings(0,10); 
        
            //console.log("test 1 " , toString.call(result[0].dataValues["title"])  === "[object String]");
            assert.ok( toString.call(result[0].dataValues["title"])  === "[object String]");
        })();
    });

    it("숙소 검색 데이터 데이터 타입 확인  ",  ()=>{
        (async ()=>{
            let result = await reservationModel.getLodgings(0,10); 
            //console.log("test 1 " , toString.call(result[0].dataValues["title"])  === "[object String]");
            assert.ok( toString.call(result[0].dataValues["title"])  === "[object String]");
            //done();
        })();
    });
});
