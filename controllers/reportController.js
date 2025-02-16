const Sale = require('../models/sale');

exports.getDailySales = async (req, res) => {
  try {
    const dailySales = await Sale.findAll(); // Implement filtering logic
    res.status(200).json(dailySales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getWeeklySales = async (req, res) => {
  try {
    const weeklySales = await Sale.findAll(); // Implement filtering logic
    res.status(200).json(weeklySales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMonthlySales = async (req, res) => {
  try {
    const monthlySales = await Sale.findAll(); // Implement filtering logic
    res.status(200).json(monthlySales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
