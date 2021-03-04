
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Task.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
    },
    description: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    createdDate: DataTypes.DATE,
    completedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
  });
  return Task;
};