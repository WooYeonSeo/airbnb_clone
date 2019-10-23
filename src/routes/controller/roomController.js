
const {RoomService} = require('../../service/roomService.js');
const db = require('../../db/models/index');
const {util} = require('../../modules/util');
const Op = db.Sequelize.Op;
let room =  new RoomService();   
// const path = require('path');
const csv = require('csv-parser');
const fs = require('fs');

class RoomController {
    constructor(){ }
    /**
     * csv bulk file upload
     *
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @memberof RoomController
     */
    async registerBulkRooms(req,res){
        //let result = await auth.idChecker(req.body.id); // true false
        res.send("yes registered");
    }

    async searchRoomsRouter(req,res){

        let condition = this.checkSearchFilter(req.query);
        //console.log(condition);
        let result = await room.searchRooms(condition);

        res.json(result);
    }

    //  검색필터 : 가격-price ,숙소일정-start_date,end_date,인원 adult_num, 평점 star_avg
    checkSearchFilter(condition){
        const con = {};
        const roomCondition = {};
        const reservationCondition ={};
        // 테스트할라면 값 받아서 넣는게 좋은데, 이러면 빈 객체 검새하는게 반복되는 것 같다.
        // 이게 컨트롤러에 있는 게 맞는지. 폼만 정리해서 service쪽으로 가는게 맞을 것 같다

        //validation
        
        let priceFilter =  this.priceFilter(condition.min_price ,condition.max_price);     
        if(!util.ObjectisEmpty(priceFilter)){
            roomCondition.price =priceFilter;
        }

        let adultNumFilter = this.adultNumFilter(condition.adult_num);
        if(Number(condition.adult_num) > 0){
            roomCondition.adult_num =adultNumFilter;
        }

        let scheduleFilter =this.scheduleFilter(condition.start_date, condition.end_date);
        if(scheduleFilter.length > 0){
            reservationCondition.start_date = scheduleFilter[0];
            reservationCondition.end_date = scheduleFilter[1];
        }

        con.roomCondition = roomCondition;
        con.reservationCondition = reservationCondition;
        console.log("roomCondition ", roomCondition)
        return con;
    }

    priceFilter(min_price ,max_price){
        let min = 0;
        let max = Number.MAX_SAFE_INTEGER;
        if(!min_price && !max_price ) {
            return {[Op.between]: [min, max]};
        }

        if(!min_price){
            min = min_price;
        }
        if(!max_price){
            max = min_price;
        }

        return {
            [Op.between]: [min, max],
        };
    }

    adultNumFilter(adultNum){
        /* if(Number(adultNum)==0){
            return {};
        } */
        return {
            [Op.gte]: Number(adultNum),
        };
    }

    scheduleFilter(start_date,end_date){

        if (!start_date || !end_date) {
            return [];
        }
        let starDateOption = {
            [Op.notBetween]: [new Date(start_date), new Date(end_date)],
        };

        let endDateOption = {
            [Op.notBetween]: [new Date(start_date), new Date(end_date)],
        };

        return [starDateOption,endDateOption];
    }


    async reserveRoomRouter(req,res){
        
        

        let condition = this.checkSearchFilter(req.query);
        //console.log(condition);
        let result = await room.searchRooms(condition);

        res.json(result);
    }

    

}
module.exports ={RoomController}