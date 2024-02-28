const getCountries = require("./getCountries");
const getCountriesByID = require("./getCountriesByID");
const getCountriesByName = require("./getCountriesByName");
const postActivity = require("./postActivity");
const getActivities = require("./getActivities");
const deleteActivity = require("./deleteActivity");

module.exports = {
    getCountries,
    getCountriesByID,
    getCountriesByName,
    postActivity,
    getActivities,
    deleteActivity
}