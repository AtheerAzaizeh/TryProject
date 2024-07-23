const db = require('../config/db');

const workerModel = {
  async getAllWorkers() {
    const query = `
      SELECT
        user_id AS id,
        profile_image_url AS worker_image,
        TIMESTAMPDIFF(YEAR, date_of_birth, CURDATE()) AS age,
        job_title,
        years_of_experience,
        location,
        rating
      FROM
        personal_details p
      JOIN
        work_experience w ON p.user_id = w.user_id
    `;
    return db.execute(query);
  },
};

module.exports = workerModel;
