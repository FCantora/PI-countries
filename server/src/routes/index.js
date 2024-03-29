const { Router } = require("express");
const { getCountries, getCountriesByID, getCountriesByName, postActivity, getActivities, deleteActivity } = require("../controllers");
const router = Router();

router.get("/countries", getCountries);
router.get("/countries/:id", getCountriesByID);
router.get("/countries/name", getCountriesByName);
router.post("/activities", postActivity);
router.get("/activities", getActivities);
router.delete("/activities/:id", deleteActivity);

module.exports = router;