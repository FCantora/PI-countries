const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountriesByName = async (req, res) => {
  const countryName = req.query.name;

  try {
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${countryName}%`,
        },
      },
      include: Activity,
    });

    if (countries.length > 0) {
      return res.json(countries);
    } else {
      return res.status(404).send("Country not found");
    }
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

module.exports = getCountriesByName;
