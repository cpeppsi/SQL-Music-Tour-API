'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stages', [
      {
        name: "Ricky Bon Place"
      },
      {
        name: "Metrorena"
      },
      {
        name: "Arissa Cola"
      },
      {
        name: "The Stage"
      },
      {
        name: "Patty LaCoupe"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('stages', null, {});
  }
};
