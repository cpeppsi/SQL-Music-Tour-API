'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stage_events', {
      stage_event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.INTEGER,
      },
      event_id: {
        type: Sequelize.INTEGER
      }
    })
    await queryInterface.addConstraint('stage_events', {
      type: 'FOREIGN KEY',
      name: 'FK_stage_events_stage_id',
      fields: ['stage_id'],
      references: {
        table: 'stages',
        field: 'stage_id'
      },
    })
    await queryInterface.addConstraint('stage_events', {
      type: 'FOREIGN KEY',
      name: 'FK_stage_events_event_id',
      fields: ['event_id'],
      references: {
        table: 'events',
        field: 'event_id'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage_events');
  }
};