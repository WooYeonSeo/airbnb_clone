'use strict';
module.exports = (sequelize, DataTypes) => {
  const reservation = sequelize.define('reservation', {
    lodging_id: DataTypes.INTEGER,
    user_id : DataTypes.STRING,
    start_date : DataTypes.DATE,
    end_date : DataTypes.DATE,
    adult_num : DataTypes.INTEGER,
    kid_num : DataTypes.INTEGER,
    infant_num : DataTypes.INTEGER,
    star : DataTypes.INTEGER
  }, {
    timestamps: false
  });
  reservation.associate = (models)=>{
    //reservation.belongsTo(models.lodgings);
    
  };
  return reservation;
};

//relation.js
//
