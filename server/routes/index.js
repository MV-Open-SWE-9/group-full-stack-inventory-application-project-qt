const express = require("express");
const router = express.Router();

// different model routers
router.use("/items", require("./item"));
router.use("/users", require("./user"));

module.exports = router;
