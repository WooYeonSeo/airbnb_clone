'use strict';
module.exports = (sequelize, DataTypes) => {
  const reservation = sequelize.define('reservation', {
    reserveid: DataTypes.INTEGER,
    user_id : DataTypes.INTEGER,
    startdate : DataTypes.DATE,
    enddate : DataTypes.DATE,
    adult_num : DataTypes.INTEGER,
    kid_num : DataTypes.INTEGER,
    infant_num : DataTypes.INTEGER,
    star : DataTypes.INTEGER
  }, {});
  reservation.associate = (models)=>{
    //reservation.belongsTo(models.lodgings);
  };
  return reservation;
};

//relation.js
//
