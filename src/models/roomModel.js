
const db = require('../db/models/index.js');
/**
 *
 *
 * @class RoomModel
 */
module.exports = class RoomModel{
    /**
     *Creates an instance of carouselModel.
     * @constructor
     * @author: 
     * @this {RoomModel}
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

    async getAvailableRooms(roomCondition, reserveCondition){

        return await this.db.lodging.findAll({
            where : roomCondition,
            include: {
                model: this.db.reservation,
                where: this.db.Sequelize.and(
                    reserveCondition
                ),
                required: false 
            }
        });
    }
}