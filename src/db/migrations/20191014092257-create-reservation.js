'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reserve_id: {
        allowNull: false,
        //autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lodging_id : {
        type: Sequelize.INTEGER,
        references: {
          model: 'lodgings',
          key: 'lodging_id' 
        },
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      adult_num: {
        type: Sequelize.STRING
      },
      kid_num: {
        type: Sequelize.STRING
      },
      infant_num: {
        type: Sequelize.INTEGER
      },
      star: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })//.then();
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reservations');
  }
};