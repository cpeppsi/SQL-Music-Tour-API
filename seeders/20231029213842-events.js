'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', [
      {
        name: "Thonathon",
        date: "2023-09-12",
        start_time: "2023-09-12 17:00:00",
        end_time: "2023-09-12 20:00:00",
      },
      {
        name: "RockFest2023",
        date: "2023-09-13",
        start_time: "2023-09-13 17:00:00",
        end_time: "2023-09-13 20:00:00",
      },
      {
        name: "BurningHam",
        date: "2023-09-14",
        start_time: "2023-09-14 17:00:00",
        end_time: "2023-09-14 20:00:00",
      },
      {
        name: "GoodStock",
        date: "2023-09-15",
        start_time: "2023-09-15 17:00:00",
        end_time: "2023-09-15 20:00:00",
      },
      {
        name: "TroubleWithTrucks",
        date: "2023-09-16",
        start_time: "2023-09-16 17:00:00",
        end_time: "2023-09-16 20:00:00",
      },
      {
        name: "CoolEvent",
        date: "2023-09-17",
        start_time: "2023-09-17 17:00:00",
        end_time: "2023-09-17 20:00:00",
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('events', null, {});
  }
};
