'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      meet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        
      },
      band_id: {
        type: Sequelize.INTEGER
      },
      meet_start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      meet_end_time: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
    await queryInterface.addConstraint('meet_greets', {
      type: 'FOREIGN KEY',
      name: 'FK_meet_greets_event_id',
      fields: ['event_id'],
      references: {
        table: 'events',
        field: 'event_id'
      },
    })
    await queryInterface.addConstraint('meet_greets', {
      type: 'FOREIGN KEY',
      name: 'FK_meet_greets_band_id',
      fields: ['band_id'],
      references: {
        table: 'bands',
        field: 'band_id'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};