var express = require("express");
const { connect } = require("./db/connection");
const cors = require("cors");

var app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use("/", require("./routes"));

// Starts the Express server
connect().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
  });
});
