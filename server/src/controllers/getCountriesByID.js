const { Country, Activity } = require("../db");

const getCountriesByID = async (req, res) => {
  const countryId = req.params.id.toUpperCase();
  try {
    const country = await Country.findOne({
      where: { id: countryId },
      include: {
        model: Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        }
      }
    });

    if (country) {
      return res.json(country);
    } else {
      return res.status(404).send("Country not found");
    }
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

module.exports = getCountriesByID;
