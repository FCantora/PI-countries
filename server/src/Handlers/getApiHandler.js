const { Country } = require("../db");
const axios = require("axios");
const URL = `http://localhost:5000/countries`;

const getApiHandler = async () => {
  try {
    const { data } = await axios.get(URL);
    const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));

    for (const country of sortedCountries) {
      await Country.create({
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continent: country.region,
        capital: country.capital?.[0] ?? "Unknown Capital",
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      });
    }
    console.log("Countries created");
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = getApiHandler;