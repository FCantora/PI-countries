const { Activity } = require("../db");

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    if (activities) res.json(activities)
    else res.status(404).json({message: "Countries not found"});

  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getActivities;