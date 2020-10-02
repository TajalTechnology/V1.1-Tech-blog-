'use strict';
const {
  Model
} = require('sequelize');
// const User = require('../models/user');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question.belongsTo(models.User, {
        foreignKey:'questionerId'
      });//okk

      Question.hasMany(models.Answer, {
        foreignKey:'questionId'
      });

      //polymorphic association
      Question.hasMany(models.Comment, {
        foreignKey: 'commentableId',
        constraints: false,
        scope: {
          commentableType: 'question'
        }
      });
    }
  }
  Question.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING)
    // DataTypes.ARRAY(DataTypes.STRING),
  }, {
    sequelize,
    modelName: 'Question',
  });

  return Question;
};