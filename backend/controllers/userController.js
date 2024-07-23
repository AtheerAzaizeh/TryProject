const reguserService = require('../services/reguserService');

const registerUser = async (req, res) => {
  try {
    await reguserService.registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await reguserService.loginUser(email, password);
    res.json({ token: user.token, role: user.role, user_id: user.user_id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
