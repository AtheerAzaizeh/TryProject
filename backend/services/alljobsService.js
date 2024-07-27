const db = require('../config/db');

const alljobs = async () => {
    try {
        // Use db.query to execute the SQL query and return results
        const [rows] = await db.query('SELECT * FROM job_list');
        return rows;
    } catch (error) {
        console.error('Error in alljobsService:', error.message);
        throw error;
    }
};

module.exports = { alljobs };
