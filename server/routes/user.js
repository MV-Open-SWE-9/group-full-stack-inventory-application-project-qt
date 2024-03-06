const express = require("express");
const router = express.Router();
const { User } = require("../models");

//get /users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// GET /users/:id
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) return res.sendStatus(404);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// POST /users
router.post("/", async (req, res, next) => {
  try {
    const addedUser = await User.create(req.body);
    res.json(addedUser);
  } catch (error) {
    next(error);
  }
});

// PUT /users/:id

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldUser = await User.findByPk(id);
    if (!oldUser) return res.sendStatus(404);
    await oldUser.update(req.body);
    const newUser = await User.findByPk(id);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});

// DELETE /Users/:id

router.delete("/:id", async (req, res) => {
  try {
    let User = await User.findByPk(req.params.id);
    if (!User) return res.sendStatus(404);
    User = await User.destroy();
    res.send(User);
  } catch (error) {
    next(error);
  }
});
