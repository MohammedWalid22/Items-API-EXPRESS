const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const validate = require("../middlewares/validate");

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", validate, createItem);
router.put("/:id", validate, updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
