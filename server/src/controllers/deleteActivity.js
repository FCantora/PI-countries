const { Activity } = require('../db');

const deleteActivity = async (req, res) => {
  const activityId = req.params.id;

  try {
    const deletedActivity = await Activity.destroy({
      where: { id: activityId },
    });

    if (deletedActivity) {
      res.status(204).send(); // 204 significa "No Content" (éxito sin contenido)
    } else {
      res.status(404).json({ message: 'Activity not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteActivity