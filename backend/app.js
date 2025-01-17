const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const cvRoutes = require('./routes/cvRoutes');
const userRoutes = require('./routes/userRoutes');
const alljobsRoutes = require('./routes/alljobsRoutes');

app.use('/api/cvs', cvRoutes);
app.use('/api/users', userRoutes);
app.use('/api/all-jobs' , alljobsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});  
