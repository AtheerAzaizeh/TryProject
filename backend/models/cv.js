const db = require('../config/db');

const cvModel = {
  async addOrUpdateCV(cv) {
    const query = `
      INSERT INTO cv_details (user_id, profile_summary, certifications, languages) 
      VALUES (?, ?, ?, ?) 
      ON DUPLICATE KEY UPDATE 
      profile_summary = VALUES(profile_summary),
      certifications = VALUES(certifications),
      languages = VALUES(languages)
    `;
    const values = [cv.user_id, cv.profile_summary, cv.certifications, cv.languages];
    return db.execute(query, values);
  },

  async viewAllCvs() {
    const query = 'SELECT * FROM cv_details';
    return db.execute(query);
  },
};

module.exports = cvModel;
