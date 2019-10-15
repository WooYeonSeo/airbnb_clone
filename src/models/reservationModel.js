
const db = require('../db/models/index.js');
/**
 *
 *
 * @class ReservationModel
 */
module.exports = class ReservationModel{
    /**
     *Creates an instance of carouselModel.
     * @constructor
     * @author: 
     * @this {ReservationModel}
     * @param {}
     */
    constructor(){
        this.db = db;
    }

    /**
     *
     *
     * @param {*} startIdx 시작위치
     * @param {*} limitCnt 제한
     * @returns
     */
    async getLodgings(startIdx = 0, limitCnt = 10){
        return await this.db.lodging.findAll({ offset: startIdx, limit: limitCnt });
    }
}