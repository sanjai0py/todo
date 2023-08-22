const express = require("express");
const router = express.Router();
const todoController = require("../controller/todo");

router.get("/", todoController.todoListAll);
router.post("/post-todo", todoController.todoPost);

module.exports = router;
