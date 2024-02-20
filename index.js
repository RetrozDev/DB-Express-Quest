const app = require("./src/app");
require('dotenv').config();

const port = process.env.APP_PORT || 5000;

app
  .listen(port, () => {
    console.log(`Le serveur est lancé sur: http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
