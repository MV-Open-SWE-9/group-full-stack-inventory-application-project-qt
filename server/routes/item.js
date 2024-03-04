const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// GET /items/id
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await Item.findByPk(id);
    res.json(item);
  } catch (error) {
    next(error);
  }
});

// POST /items
router.post("/", async (req, res, next) => {
  try {
    const addedItem = await Item.create(req.body);
    res.json(addedItem);
  } catch (error) {
    next(error);
  }
});

// PUT /items/id

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldItem = await Item.findByPk(id);
    await oldItem.update(req.body);
    const newItem = await Item.findByPk(id);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
