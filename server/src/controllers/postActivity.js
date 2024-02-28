const { Activity, Country } = require("../db");

const regexNotNumbers = /^[^\d]+$/;
const regexNumbers = /^[0-9]+$/;

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    if (![name, difficulty, season].every(Boolean))
      return res.status(400).json({ message: "Missing information" });
    
      const [newActivity, created] = await Activity.findOrCreate({
      where: {
        name,
        difficulty,
        duration,
        season,
      }
    });

    if (!created) throw new Error('Activity already exists');

    if (
      !regexNotNumbers.test(name) ||
      name.length > 20 ||
      !regexNumbers.test(duration) ||
      Number(duration) > 24
    ) {
      throw new Error("Does not meet the requirements");
    }
  
    // Asegúrate de que 'countries' es un array de IDs de países
    if (countries && Array.isArray(countries) && countries.length > 0) {
      const countriesToAdd = await Country.findAll({
        where: {
          name: countries,
        },
      });
      await newActivity.addCountries(countriesToAdd);
    }

    const updatedActivity = await Activity.findByPk(newActivity.id, {
      include: Country
    })

    res.json(updatedActivity);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postActivity;
