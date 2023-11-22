const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like HTML and CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submissions
app.post('/submit-review', (req, res) => {
    const formData = req.body;
    console.log('Received survey data:', formData);
    // Add your logic here to save the data to a database or perform any other necessary actions.
    res.send('Survey data received successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
