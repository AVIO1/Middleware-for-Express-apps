// app.js or index.js (your main Express application file)

const express = require('express');
const attachTrace = require('./middleware');
const taskRoutes = require('./routes/tasks');

const app = express();

// Mount the middleware for /tasks routes
app.use('/tasks', attachTrace);

// Mount the task routes
app.use('/tasks', taskRoutes);

// Other routes and middleware
// ...

// Start the Express server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
