const workerService = require('../services/workerService');

const getAllWorkers = async (req, res) => {
  try {
    const workers = await workerService.getAllWorkers();
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

module.exports = {
  getAllWorkers,
};
