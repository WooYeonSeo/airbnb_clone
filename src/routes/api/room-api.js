var express = require('express');
var router = express.Router();
const path = require('path');

const {RoomController} = require('../controller/roomController');
let roomController = new RoomController();

// url : /api/room/register/list
//router.get('/register/list',  roomController.registerBulkRooms );

router.get('/search/rooms',  roomController.searchRoomsRouter.bind(roomController));

module.exports = router;
