const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const airlineRoutes = require("./routes/airlines");
const destinationRoutes = require("./routes/destinations");
const airlineApiRoutes = require("./routes/airlineApi");
require("./databaseConnect");
const methodOverride = require("method-override");
const PORT = process.env.port || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(cors());

app.use("/airlines", airlineRoutes);
app.use("/airlines/:slug/destinations", destinationRoutes);

app.use("/api/airlines", airlineApiRoutes);
app.use("/api/airlines/info", airlineApiRoutes);
app.use("/api/airlines/:slug", airlineApiRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
