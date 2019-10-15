'use strict';
module.exports = (sequelize, DataTypes) => {
  const lodging = sequelize.define('lodging', {
    title: DataTypes.STRING,
    pic_id: DataTypes.INTEGER,
    adult_num: DataTypes.INTEGER,
    kid_num: DataTypes.INTEGER,
    infant_num: DataTypes.INTEGER,
    lodging_type: DataTypes.INTEGER,
    star_avg: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  lodging.associate = function(models) {
    // associations can be defined here
  };
  return lodging;
};