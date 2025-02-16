const Order = require('../models/sale');

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.update(req.body, {
      where: { sale_id: req.params.id }
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await Order.destroy({
      where: { sale_id: req.params.id }
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.customizeMenuItem = (req, res) => {
  // Logic for customizing menu items
};

exports.handleOnlineOrder = (req, res) => {
  // Logic for handling online orders
};
