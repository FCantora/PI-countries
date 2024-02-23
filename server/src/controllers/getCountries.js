const { Country } = require("../db");

const getCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();
    if (countries) res.json(countries);
    else res.status(404).send("Countries not found");
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = getCountries;
