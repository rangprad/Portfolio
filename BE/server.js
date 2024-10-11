const express = require('express');
const cors = require('cors');  // Import cors
const app = express();

// CORS options to allow frontend at localhost:5173
const corsOptions = {
  origin: ['http://localhost:5173'],  // Allow your frontend's origin
  methods: 'GET,POST,PUT,DELETE',     // Allow specific HTTP methods
  allowedHeaders: 'Content-Type,Authorization',  // Allow required headers
};

// Use CORS middleware
app.use(cors(corsOptions));

// Other middleware
app.use(express.json());

// Routes (Ensure this is after the CORS setup)
app.use('/api/projects', require('./src/routes/projectsRoutes'));

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
