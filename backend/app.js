"use strict";
const express = require("express");
const { NotFoundError } = require("./expressError");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(cors());
app.use(express.json());

app.use("/", routes);

// Handle 404 errors
app.use((req, res, next) => {
    return next(new NotFoundError);
})

// Unhandled errors go here (everything not included in a 404 error)
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status }
    })
});

module.exports = app;