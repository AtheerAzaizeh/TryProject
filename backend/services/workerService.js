const workerModel = require('../models/worker');

const getAllWorkers = async () => {
  return workerModel.getAllWorkers();
};

module.exports = {
  getAllWorkers,
};