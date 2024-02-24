const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validators: {
          min: {
            args: [1],
            msg: "Difficulty must be at least 1",
          },
          max: {
            args: [5],
            msg: "Difficulty must be at most 5",
          },
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0, // duration cannot be negative
        },
      },
      season: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          isValidSeasons(value) {
            const validSeasons = ["spring", "summer", "autumn", "winter"];
            if (!value.every(season => validSeasons.includes(season.toLowerCase()))) {
              throw new Error("Invalid season value");
            }
          },
        },
      },
      // countries: {
      //   type: DataTypes.ARRAY(DataTypes.STRING),
      //   allowNull: false,
      //   validate: {
      //     areValidStrings(value) {
      //       if (!value.every(item => typeof item === 'string')) {
      //         throw new Error("Invalid value in countries array");
      //       }
      //     },
      //   },
      // },
    },
    {
      timestamps: false,
    }
  );
};