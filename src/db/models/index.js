'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env =  'development'; //process.env.NODE_ENV
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => { 
    console.log("file", file);
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => { 
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db); // 관계 정의하는 곳
  }
});

db.lodging.hasMany(db.reservation, {
  foreignKey: 'lodging_id',
  sourceKey: 'id',
});  

// rooms has many reservations.
// reservation has many rooms 

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
