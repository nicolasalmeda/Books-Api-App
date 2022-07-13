const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const routes = require("./routes");
const cors = require("cors");
const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "colegioprivado",
  database: "library",
};

const app = express();
app.set("port", process.env.PORT || 3002);

//middlewares -------------------------------

app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());
app.use(cors());

//routes-------------------------------------
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.use("/api", routes);

// server running --------------------------
app.listen(app.get("port"), () => {
  console.log("Escuchando server en el port", app.get("port"));
});
