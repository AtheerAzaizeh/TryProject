const cvService = require('../services/cvService');

const createCv = async (req, res) => {
  try {
    const { user_id, personal_details, education, work_experience } = req.body;

    // Call the service to handle database operations
    await cvService.createCv(user_id, personal_details, education, work_experience);

    res.status(201).json({ message: 'CV created successfully' });
  } catch (error) {
    console.error('Error creating CV:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createCv
};
