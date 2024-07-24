const db = require('../config/db');

const createCv = async (user_id, personal_details, education, work_experience) => {
  try {
    await db.query('INSERT INTO personal_details (user_id, first_name, last_name, date_of_birth, profile_image_url, location, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)', [
      user_id,
      personal_details.first_name,
      personal_details.last_name,
      personal_details.date_of_birth,
      personal_details.profile_image_url,
      personal_details.location,
      personal_details.phone_number
    ]);

    for (const edu of education) {
      await db.query('INSERT INTO education (user_id, institution_name, degree, field_of_study, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)', [
        user_id,
        edu.institution_name,
        edu.degree,
        edu.field_of_study,
        edu.start_date,
        edu.end_date
      ]);
    }

    for (const work of work_experience) {
      await db.query('INSERT INTO work_experience (user_id, company_name, job_title, start_date, end_date, skills) VALUES (?, ?, ?, ?, ?, ?)', [
        user_id,
        work.company_name,
        work.job_title,
        work.start_date,
        work.end_date,
        work.skills
      ]);
    }
  } catch (error) {
    console.error('Error in cvService:', error.message);
    throw error;
  }
};

module.exports = {
  createCv
};
