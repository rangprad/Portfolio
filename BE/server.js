const express = require('express');
const cors = require('cors');  
const app = express();

const corsOptions = {
  origin: ['http://localhost:5173'],  
  methods: 'GET,POST,PUT,DELETE',     
  allowedHeaders: 'Content-Type,Authorization',  
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/projects', require('./src/routes/projectsRoutes'));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
