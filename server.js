var express = require("express");
const { connect } = require("./db/connection");
var app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/", require("./routes"));

// Starts the Express server
connect().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
  });
});
