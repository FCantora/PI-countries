const { Router } = require("express");
const { getCountries, getCountriesByID, getCountriesByName, postActivity, getActivities } = require("../controllers");
const router = Router();

router.get("/countries", getCountries);
router.get("/countries/:id", getCountriesByID);
router.get("/countries/name", getCountriesByName);
router.post("/activity", postActivity);
router.get("/activity", getActivities);

module.exports = router;