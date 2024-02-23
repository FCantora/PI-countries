const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validators: {
        min: {
          args: 1,
          msg: "Difficulty must be at least 1",
        },
        max: {
          args: 5,
          msg: "Difficulty must be at most 5",
      }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Summer", "Autumn", "Winter", "Spring"]],
      }
    },
  },
  {
    timestamps: false,
  });
};