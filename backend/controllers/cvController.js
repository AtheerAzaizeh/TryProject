const cvService = require('../services/cvService');

const createCv = async (req, res) => {
  try {
    const { user_id, personal_details, education, work_experience } = req.body;
    if (!user_id) {
      throw new Error('User ID is required');
    }

    await cvService.createCv(user_id, personal_details, education, work_experience);
    res.status(201).json({ message: 'CV created successfully' });
  } catch (error) {
    console.error('Error creating CV:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCv
};
