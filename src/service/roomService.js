const RoomModel = require('../models/roomModel.js');

class RoomService{
    constructor(){
        this.roomModel = new RoomModel();
    }
 
    async searchRooms(conditions){
        return await this.roomModel.getAvailableRooms(conditions.roomCondition,conditions.reservationCondition);
    }

}
module.exports ={
    RoomService
}
