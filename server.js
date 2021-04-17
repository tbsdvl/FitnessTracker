//Set up server, http://localhost:3001/.
// Required modules
const express = require("express");
const logger = require("morgan");
const app = express();

const PORT = process.env.PORT || 8080;

// Middleware
app.use(logger("dev"));

// user public directory
app.use(express.static("public"));
app.use(express.json());

// parse url encoded bodies upon request
express.urlencoded({ extended: true });

// Routing paths

app.use(require("./routes"));

// Listen for server
app.listen(PORT, () => {
  console.log("Server listening on PORT: " + PORT);
});
