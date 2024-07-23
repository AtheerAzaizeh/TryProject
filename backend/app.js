const express = require('express');
const app = express();
const env = require('./config/env');
const db = require('./config/db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const cvRoutes = require('./routes/cvRoutes');
const userRoutes = require('./routes/userRoutes');
const workerRoutes = require('./routes/workerRoutes');

app.use('/api/cvs', cvRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workers', workerRoutes);

const axios = require('axios');


const fetchUniversityNames = async () => {
  try {
    const response = await axios.get('http://universities.hipolabs.com/search?country=jordan');
    const universities = response.data;
    const universityNames = universities.map(university => university.name);
    console.log('List of university names:', universityNames);
  } catch (error) {
    console.error('Error fetching universities:', error);
  }
};

fetchUniversityNames();
app.listen(env.PORT || 3000, () => {
  console.log(`Server is running on port ${env.PORT || 3000}`);
});