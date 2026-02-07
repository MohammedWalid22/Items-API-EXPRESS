let items = require("../data/items");

exports.getAllItems = (req, res) => {
  res.json(items);
};

exports.getItemById = (req, res, next) => {
  const item = items.find(i => i.id === req.params.id);
  if (!item) return next({ status: 404, message: "Item not found" });
  res.json(item);
};

exports.createItem = (req, res) => {
  const newItem = {
    id: Date.now().toString(),
    ...req.body,
  };
  items.push(newItem);
  res.status(201).json(newItem);
};

exports.updateItem = (req, res, next) => {
  const index = items.findIndex(i => i.id === req.params.id);
  if (index === -1) return next({ status: 404, message: "Item not found" });

  items[index] = { ...items[index], ...req.body };
  res.json(items[index]);
};

exports.deleteItem = (req, res, next) => {
  const index = items.findIndex(i => i.id === req.params.id);
  if (index === -1) return next({ status: 404, message: "Item not found" });

  items.splice(index, 1);
  res.json({ message: "Item deleted" });
};
