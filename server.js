    const express = require('express');
    const app = express();
    const port = 3000; // Or any desired port
    const path = require('path'); // Required for path.join

    // Serve static files (HTML, CSS, images, JS) from a 'public' directory
    app.use(express.static('public'));

    // Define a route for the homepage
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html'); // Send the main HTML file
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the directory where your EJS files (views) are located
// By default, Express looks for a 'views' directory in the root of your project
app.set('views', path.join(__dirname, 'views'));