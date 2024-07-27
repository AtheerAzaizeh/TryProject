const alljobsService = require('../services/alljobsService');

const getAllJobs = async (req, res) => {
    try {
        const jobs = await alljobsService.alljobs();
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error in getAllJobs controller:', error.message);
        res.status(500).json({ error: 'Database error' });
    }
};

module.exports = { getAllJobs };
