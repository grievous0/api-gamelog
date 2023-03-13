'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      grid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      wallpaper: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      year: Sequelize.TEXT,
      developer: Sequelize.TEXT,
      publisher: Sequelize.TEXT,
      metacritic_score: Sequelize.TEXT,
      gamelog_score: Sequelize.TEXT,
      primary_genre: Sequelize.TEXT,
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('games')
  }
};