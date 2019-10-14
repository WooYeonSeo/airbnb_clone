'use strict';
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    reserveid: DataTypes.INTEGER
  }, {});
  test.associate = function(models) {
    // associations can be defined here
  };
  return test;
};