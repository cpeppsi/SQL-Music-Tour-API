'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER
      },
      band_id: {
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.INTEGER
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
    await queryInterface.addConstraint('set_times', {
      type: 'FOREIGN KEY',
      name: 'FK_set_times_event_id',
      fields: ['event_id'],
      references: {
        table: 'events',
        field: 'event_id'
      }
    })
    await queryInterface.addConstraint('set_times', {
      type: 'FOREIGN KEY',
      name: 'FK_set_times_band_id',
      fields: ['band_id'],
      references: {
        table: 'bands',
        field: 'band_id'
      }
    })
    await queryInterface.addConstraint('set_times', {
      type: 'FOREIGN KEY',
      name: 'FK_set_times_stage_id',
      fields: ['stage_id'],
      references: {
        table: 'stages',
        field: 'stage_id'
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};