'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lodgings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      pic_id: {
        type: Sequelize.STRING
      },
      adult_num: {
        type: Sequelize.INTEGER
      },
      kid_num: {
        type: Sequelize.INTEGER
      },
      infant_num: {
        type: Sequelize.INTEGER
      },
      lodging_type: {
        type: Sequelize.STRING
      },
      star_avg: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lodgings');
  }
};
