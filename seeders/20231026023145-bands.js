'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bands', [
      {
        name: "Armpit",
        genre: "Rock",
        available_start_time: "2023-08-18 14:00:00",
        end_time: "2023-08-18 16:00:00",
        recommendation: "7/10"
      },
      {
        name: "Little Poppies",
        genre: "Pop",
        available_start_time: "2023-08-17 14:00:00",
        end_time: "2023-08-17 16:00:00",
        recommendation: "7/10"
      },
      {
        name: "Amarillo",
        genre: "Soul",
        available_start_time: "2023-08-16 14:00:00",
        end_time: "2023-08-16 16:00:00",
        recommendation: "8/10"
      },
      {
        name: "WhyScent",
        genre: "R&B",
        available_start_time: "2023-08-19 14:00:00",
        end_time: "2023-08-19 16:00:00",
        recommendation: "9/10"
      },
      {
        name: "Lost My Dog",
        genre: "Country",
        available_start_time: "2023-08-20 14:00:00",
        end_time: "2023-08-20 16:00:00",
        recommendation: "6/10"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('bands', null, {});
  }
};
