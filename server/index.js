const express = require("express");
const adminroutes = require("./routes/product.routes.admin.js");
const userroutes = require("./routes/product.routes.user.js");
const cors = require("cors");
const logger = require("morgan");

var product = require("./database_mysql");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/user", userroutes);
app.use("/admin", adminroutes);

app.listen(PORT, function () {
  console.log("listening on port 5000!");
});
