
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");


const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");

mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use(express.json());


app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

app.use("/images", express.static(path.join(__dirname, "images")));


module.exports = app;