const express = require('express');
const app = express();
const env = require('./config/env');
const cors = require('cors');
var bodyParser = require('body-parser');
const port = 8080;

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const cvRoutes = require('./routes/cvRoutes');
const userRoutes = require('./routes/userRoutes');
const alljobsRoutes = require('./routes/alljobsRoutes');

app.use('/api/cvs', cvRoutes);
app.use('/api/users', userRoutes);
app.use('/api/all-jobs' , alljobsRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`);
});
