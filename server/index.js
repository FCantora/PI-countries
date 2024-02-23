require("dotenv").config();
const { conn } = require("./src/db.js");
const server = require("./src/server");
const PORT = process.env.PORT;
const getApiHandler = require("./src/Handlers/getApiHandler");

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      await getApiHandler();
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));