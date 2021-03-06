const helper = require('../helpers/helper');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reference_code: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      options: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      answer: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'QuizTypes', key: 'id' }
      },
      active_status: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: helper.ActiveStatus.ACTIVE,
        references: { model: 'ActiveStatuses', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questions');
  },
};
