var express = require("express");
var app = express();
const port = process.env.PORT || 3000;
app.use("/", require("./routes"));

// Starts the Express server
app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});
