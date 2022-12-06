"use strict";
const app = require("./app");
const PORT = +process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Started on http://localhost:${PORT}`));