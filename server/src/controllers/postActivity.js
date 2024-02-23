const { Activity, Country } = require("../db");

const postActivity = async (req, res) => {
  try {
    const { id, name, difficulty, duration, season, countries } = req.body;
    if (![id, name, difficulty, season].every(Boolean))
      return res.status(400).json({ message: "Missing information" });
    const activity = await Activity.create({
      id,
      name,
      difficulty,
      duration,
      season,
    });
    // Asegúrate de que 'countries' es un array de IDs de países
    if (countries && Array.isArray(countries) && countries.length > 0) {
      const countriesToAdd = await Country.findAll({
        where: {
          id: countries,
        },
      });
      await activity.addCountries(countriesToAdd);
    }
    res.json(activity);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postActivity;
